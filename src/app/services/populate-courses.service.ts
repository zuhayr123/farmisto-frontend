import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseContentTreeModel } from '../map-models/course_content_tree';
import { map, catchError } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';

@Injectable({
  providedIn: 'root'
})
export class PopulateCoursesService {

  base_url = "https://farmisto-learn.herokuapp.com/api"
  _url_get_course_list = this.base_url + '/course/all_courses';

  courseContentTreeModels!: CourseContentTreeModel[];

  constructor(private _http: HttpClient) { }

  getCourseList() {
    console.log("course list was called");
    return this._http.get(this._url_get_course_list);
  }
}
