import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogContentAdditionComponent } from '../dialog-content-addition/dialog-content-addition.component';
import { CourseContentTreeModel } from '../map-models/course_content_tree';
import { CreateCourseService } from '../create-course.service';
import { DialogCourseBulkCreateComponent } from '../dialog-course-bulk-create/dialog-course-bulk-create.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'enroll_status', 'options'];
  dataSource!: MatTableDataSource<any>;
  logic = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog, public service: CreateCourseService, private router: Router, private route: ActivatedRoute) {
    this.getCourseList();
  }

  ngAfterViewInit() {
    this.getCourseList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentAdditionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        // this.deleteJobs(id);
      }
    });
  }

  openBulkCourseUpload(row: any) {
    console.log(JSON.stringify(row));
    console.log("******************* NEW DATA ********************")
    this.replaceIds(row);

    const dialogRef = this.dialog.open(DialogCourseBulkCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        // this.deleteJobs(id);
      }
    });
  }

  replaceIds(row: any) {
    Array.from(row.children).forEach(chapter => {
      delete (chapter as any)._id
      Array.from((chapter as any).children).forEach(subchapter => {
        delete (subchapter as any)._id
        Array.from((subchapter as any).children).forEach(content => {
          delete (content as any)._id
        })
      })
    });

    var dao = row as CourseContentTreeModel
    var newstr = JSON.stringify(row).replace(row.course_name, row.course_name + " copy 01");
    var data = this.replaceAll(newstr, row.course_id , Date.now().toString());
    delete row._id

    dao.children.forEach(chapter =>{
      data = this.replaceAll(data, chapter.content_id, (Date.now()+1).toString());
      chapter.children.forEach(subchapter => {
        data = this.replaceAll(data, subchapter.content_id, (Date.now()+5).toString());
        subchapter.children.forEach(content => {
          data = this.replaceAll(data, content.content_id, (Date.now()+10).toString());
        })
      })
    });
    console.log(JSON.stringify(dao));
  }

  escapeRegExp(string: String) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  
  replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }
  getCourseList() {
    this.service.getCourseList().subscribe((res) => {
      console.log("the resoponse received was " + JSON.stringify(res))
      this.service.courseContentTreeModels = (res as { data: CourseContentTreeModel[] }).data
      this.dataSource = new MatTableDataSource(this.service.courseContentTreeModels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  showCourseDetails(row: any) {
    console.log("the data visible in the course component while navigation is " + JSON.stringify(row));
    this.service.courseContentTreeModel = row as CourseContentTreeModel;
    this.router.navigateByUrl("ccp/add_course");
    // this.router.navigate(['add_course'], { relativeTo: this.route });
  }
}
