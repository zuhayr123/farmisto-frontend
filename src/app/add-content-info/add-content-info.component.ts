import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-content-info',
  templateUrl: './add-content-info.component.html',
  styleUrls: ['./add-content-info.component.css']
})
export class AddContentInfoComponent implements OnInit {

  contentType?: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addVideoContent(){
    this.router.navigate(['video_content'], {relativeTo:this.route});
  }

  addTextContent(){
    this.router.navigate(['text_content'], {relativeTo:this.route});
  }

}
