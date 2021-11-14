import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { AddVideoContent } from '../map-models/add-video-content';

@Injectable({
  providedIn: 'root'
})
export class AddContentService {

  base_url = "https://farmisto-learn.herokuapp.com/api"
  _url_submit_content = this.base_url + '/content/content_info';

  constructor(private _http: HttpClient) { }

  addVideoContent: AddVideoContent = new AddVideoContent();

  submitData(data: AddVideoContent) {
    return this._http.post<any>(this._url_submit_content, data)
  }


}
