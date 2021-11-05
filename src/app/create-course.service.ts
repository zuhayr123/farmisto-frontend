import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseContentTreeModel } from './map-models/course_content_tree';
import { map, catchError } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CourseCategoryModel } from './map-models/course_category_model';


@Injectable({
  providedIn: 'root'
})
export class CreateCourseService {

  base_url = "https://farmisto-learn.herokuapp.com/api"
  _url_submit_content_list = this.base_url + '/course/course_info';
  courseName: string = ""

  constructor(private _http: HttpClient) { }

  courseContentTreeModel: CourseContentTreeModel = new CourseContentTreeModel();

  courseCategoryModel : CourseCategoryModel = new CourseCategoryModel();

  getSuggestions() {
    return this._http.get("./assets/jsons/model_suggestions.json");
  }

  submitData(data: CourseContentTreeModel) {
    return this._http.post<any>(this._url_submit_content_list, data);
  }
}
