import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { AddVideoContent } from '../map-models/add-video-content';
import { CourseContentTreeModel } from '../map-models/course_content_tree';

@Injectable({
  providedIn: 'root'
})
export class AddContentService {

  base_url = "https://farmisto-learn.herokuapp.com/api"
  _url_submit_content = this.base_url + '/content/content_info';
  _url_update_parent = this.base_url + '/course/update_course_info_by_id';

  constructor(private _http: HttpClient) { }

  addVideoContent: AddVideoContent = new AddVideoContent();

  submitData(data: AddVideoContent) {
    return this._http.post<any>(this._url_submit_content, data)
  }

  updateContentData(data: CourseContentTreeModel) {
    const params = new HttpParams().append('course_id', data.course_id);
    return this._http.put<any>(this._url_update_parent, data, {params})
  }

}
