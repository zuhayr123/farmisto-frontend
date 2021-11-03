import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { CourseContentTreeModel } from './map-models/course_content_tree';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreateCourseService {

  base_url = "https://api.laaltentech.com"
  _url_submit = this.base_url + '/api/apply';

  constructor() { }

  courseName : string = ""
}
