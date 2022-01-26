import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateCourseService } from '../create-course.service';

@Component({
  selector: 'app-dialog-course-bulk-create',
  templateUrl: './dialog-course-bulk-create.component.html',
  styleUrls: ['./dialog-course-bulk-create.component.css']
})
export class DialogCourseBulkCreateComponent implements OnInit {

  public courseName!: string;

  constructor(private router: Router, private route: ActivatedRoute, public service: CreateCourseService) { }

  ngOnInit(): void {
  }

  addCourse() {
    console.log(this.courseName)
    this.service.courseContentTreeModel.course_name = this.courseName
    this.router.navigateByUrl("/ccp/add_course");
  }

}
