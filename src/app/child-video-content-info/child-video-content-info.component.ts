import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddVideoContent } from '../map-models/add-video-content';
import { CourseCategoryModel } from '../map-models/course_category_model';
import { CourseContentTreeModel } from '../map-models/course_content_tree';
import { AddContentService } from '../services/add-content.service';

@Component({
  selector: 'app-child-video-content-info',
  templateUrl: './child-video-content-info.component.html',
  styleUrls: ['./child-video-content-info.component.css']
})
export class ChildVideoContentInfoComponent implements OnInit {

  constructor(public service: AddContentService, private router : Router) { }

  contentId!: string;
  contentType?: string;
  title!: string;
  short_info!: string;
  long_info!: string;
  url!: string;
  hide = false;
  contentModel!: CourseContentTreeModel

  ngOnInit(): void {

    if (history.state.data.content_name == undefined) {
      this.title = "Content Name";
    }

    else {
      console.log("data visible is " + history.state.data)
      this.title = history.state.data.content_name;
      this.contentId = history.state.data.content_id;
      this.contentModel = history.state.data.treeData
      console.log("the content id was " + this.contentId);
      console.log("the tree data is " + JSON.stringify(this.contentModel))
    }



    this.service.getContentInfo(this.contentId).subscribe((res) => {
      console.log("the code reached here");
      var data = ((res as any).content_info as AddVideoContent);
      console.log("data we recievd was " + JSON.stringify(data))
      this.title = data.title;
      this.short_info = data.short_info;
      this.long_info = data.long_info;
      this.url = data.url;
    });
  }

  updateContentName(event: Event) {
    this.service.addVideoContent.title = (event.target as HTMLElement).innerText;
  }

  searchAndUpdateTree(content_id: string, contentData: any): CourseContentTreeModel {
    var data = contentData as CourseContentTreeModel;

    if (data.children != null && data.children != undefined) {
      data.children.forEach((chapter) => {
        if (chapter.children != null && chapter.children != undefined) {
          chapter.children.forEach((sub_chapter => {
            if (sub_chapter.children != null && sub_chapter.children != undefined) {
              sub_chapter.children.forEach((content) => {
                if (content.content_id == content_id) {
                  content.has_content = true;
                }
              });
            }
          }));
        }
      });
    }
    return data;
  }

  onsubmit() {
    console.log("the submit button was clicked");
    this.service.addVideoContent.short_info = this.short_info;
    this.service.addVideoContent.long_info = this.long_info;
    this.service.addVideoContent.url = this.url;
    this.service.addVideoContent.content_type = "video";
    this.service.addVideoContent.content_id = this.contentId;

    this.service.submitData(this.service.addVideoContent).subscribe((res) => {
      this.contentModel = this.searchAndUpdateTree(this.contentId, this.contentModel);
      console.log("Data should be able to visible here.")
      console.log(JSON.stringify(this.contentModel));
      this.service.updateContentData(this.contentModel).subscribe((result) => {
        console.log("the result seen was " +  JSON.stringify(result));
        this.service.addVideoContent = new AddVideoContent();
        this.router.navigateByUrl("ccp/courses");
      });
      console.log("the response we received was " + res);
    });
  }
}
