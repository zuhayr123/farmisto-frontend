import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateCourseService } from '../create-course.service';

@Component({
  selector: 'app-dialog-content-addition',
  templateUrl: './dialog-content-addition.component.html',
  styleUrls: ['./dialog-content-addition.component.css']
})
export class DialogContentAdditionComponent implements OnInit {

  public courseName!: string;

  constructor(private router: Router, private route: ActivatedRoute, public service: CreateCourseService) { }

  ngOnInit(): void {
  }

  addCourse() {
    console.log(this.courseName)
    this.service.courseContentTreeModel.course_name = this.courseName
    this.router.navigate(['add_course'], { relativeTo: this.route });
  }

}
