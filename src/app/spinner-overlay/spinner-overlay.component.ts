import { Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from '../services/spinner-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.css']
})
export class SpinnerOverlayComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  isLoading: Subject<boolean> = this.service.isLoading;

  constructor( private service : SpinnerServiceService) { }


  ngOnInit(): void {
    console.log("The spinner was initiated")
  }

}
