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

  base_url = "https://api.laaltentech.com"
  _url_submit = this.base_url + '/api/apply';
  courseName: string = ""


  constructor(private _http: HttpClient) { }

  courseContentTreeModel: CourseContentTreeModel = new CourseContentTreeModel();

  courseCategoryModel : CourseCategoryModel = new CourseCategoryModel();

  courseContentForm: FormGroup = new FormGroup({
    course_id: new FormControl(null),
    course_name: new FormControl(''),
    course_short_info: new FormControl(''),
    course_long_description: new FormControl(''),
    category_name: new FormControl(''),
    category_id: new FormControl(''),
    item: new FormControl(''),
    content_type: new FormControl(''),
    content_id: new FormControl(''),
    children: new FormGroup({
      item: new FormControl(''),
      content_type: new FormControl(''),
      content_id: new FormControl(''),
      children: new FormGroup({
        item: new FormControl(''),
        content_type: new FormControl(''),
        content_id: new FormControl(''),
        children: new FormGroup({
          item: new FormControl(''),
          content_type: new FormControl(''),
          content_id: new FormControl('')
        })
      })
    })
  });

  getSuggestions() {
    return this._http.get("./assets/jsons/model_suggestions.json");
  }
}
