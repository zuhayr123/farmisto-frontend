import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-shundev',
  templateUrl: './shundev.component.html',
  styleUrls: ['./shundev.component.css']
})
export class ShundevComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  isChecked_1 = true;
  isChecked_2 = true;
  isChecked_3 = true;
  isChecked_4 = true;
  isChecked_5 = true;
  isChecked_6 = true;
  isChecked_7 = true;
  isChecked_8 = true;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  switch_1() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_1) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund1shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund1shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }



  switch_2() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_2) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund2shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund2shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }

  switch_3() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_3) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund3shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund3shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }

  switch_4() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_4) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund4shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund4shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }

  switch_5() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_5) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund5shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund5shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }

  switch_6() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_6) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund6shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund6shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }

  switch_7() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_7) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund7shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund7shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }

  switch_8() {
    console.log("print was done but trigger not worked")
    if (this.isChecked_8) {
      console.log("switch the light on");
      var data = this._http.get("http://192.168.4.1/shund8shunl96shune").subscribe(data => {
        console.log(data);
      });
    }

    else {
      console.log("switch the light off");
      var another = this._http.get("http://192.168.4.1/shund8shunl11shune").subscribe(data => {
        console.log(data);
      });
    }
  }



}
