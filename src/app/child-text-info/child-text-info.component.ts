import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-text-info',
  templateUrl: './child-text-info.component.html',
  styleUrls: ['./child-text-info.component.css']
})
export class ChildTextInfoComponent implements OnInit {

  files: File[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
