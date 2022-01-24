import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogContentAdditionComponent } from '../dialog-content-addition/dialog-content-addition.component';
import { CourseContentTreeModel } from '../map-models/course_content_tree';
import { CreateCourseService } from '../create-course.service';


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

  getCourseList() {
    this.service.getCourseList().subscribe((res) => {
      console.log("the resoponse received was " + JSON.stringify(res))
      this.service.courseContentTreeModels = (res as { data: CourseContentTreeModel[] }).data
      this.dataSource = new MatTableDataSource(this.service.courseContentTreeModels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  showCourseDetails(row:any) {
    console.log("the data visible in the course component while navigation is " + JSON.stringify(row));
    this.service.courseContentTreeModel = row as CourseContentTreeModel;
    this.router.navigateByUrl("ccp/add_course");
    // this.router.navigate(['add_course'], { relativeTo: this.route });
  }
}
