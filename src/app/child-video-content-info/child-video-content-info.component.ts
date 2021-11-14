import { Component, Injectable, OnInit } from '@angular/core';
import { AddContentService } from '../services/add-content.service';

@Component({
  selector: 'app-child-video-content-info',
  templateUrl: './child-video-content-info.component.html',
  styleUrls: ['./child-video-content-info.component.css']
})
export class ChildVideoContentInfoComponent implements OnInit {

  constructor(public service: AddContentService) { }

  contentId!: string;
  contentType?: string;
  title!: string;
  short_info!: string;
  long_info!: string;
  url!: string;
  hide = false;

  ngOnInit(): void {

    if (history.state.data.content_name == undefined){
      this.title = "Content Name";
    }

    else{
      this.title = history.state.data.content_name;
      this.contentId = history.state.data.content_id;
    }
  }

  updateContentName(event: Event) {
    this.service.addVideoContent.title = (event.target as HTMLElement).innerText;
  }


  onsubmit(){
    console.log("the submit button as clicked");
    this.service.addVideoContent.short_info = this.short_info;
    this.service.addVideoContent.long_info = this.long_info;
    this.service.addVideoContent.url = this.url;
    this.service.addVideoContent.content_type = "video";

    this.service.submitData(this.service.addVideoContent).subscribe((res) => {
      console.log("the response we received was " + res);
    });
  }

}
