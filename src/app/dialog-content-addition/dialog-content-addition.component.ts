import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-content-addition',
  templateUrl: './dialog-content-addition.component.html',
  styleUrls: ['./dialog-content-addition.component.css']
})
export class DialogContentAdditionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addCourse(){
    this.router.navigate(['add_course'], {relativeTo:this.route});
  }

}
