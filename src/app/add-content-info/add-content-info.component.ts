import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseContentTreeModel } from '../map-models/course_content_tree';


@Component({
  selector: 'app-add-content-info',
  templateUrl: './add-content-info.component.html',
  styleUrls: ['./add-content-info.component.css']
})
export class AddContentInfoComponent implements OnInit {

  contentType?: string;
  contentName?: string
  contentId?: string
  courseContentTreeModel?: CourseContentTreeModel

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contentId = history.state.data.content_id;
    this.contentName = history.state.data.content_name;
    this.courseContentTreeModel = history.state.data.treeData;
    
  }

  addVideoContent() {
    this.router.navigate(['video_content'], { relativeTo: this.route, state: { data: { content_name: this.contentName, content_id: this.contentId, treeData: this.courseContentTreeModel } } });
  }

  addTextContent() {
    this.router.navigate(['text_content'], { relativeTo: this.route });
  }

}
