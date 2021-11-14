import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-content-info',
  templateUrl: './add-content-info.component.html',
  styleUrls: ['./add-content-info.component.css']
})
export class AddContentInfoComponent implements OnInit {

  contentType?: string;
  contentName?:string
  contentId?:string

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contentId = history.state.data.content_id;
    this.contentName = history.state.data.content_name
    console.log(history.state.data.content_name);
  }

  addVideoContent(){
    this.router.navigate(['video_content'], {relativeTo:this.route, state: {data: {content_name : this.contentName, content_id :this.contentId}}});
  }

  addTextContent(){
    this.router.navigate(['text_content'], {relativeTo:this.route});
  }

}
