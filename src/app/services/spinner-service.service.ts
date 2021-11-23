import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  isLoading = new Subject<boolean>();

  constructor() { }

  public show(): void {
    this.isLoading.next(true);
    console.log("show the overlay");
  }

  public hide(): void {
    console.log("hide the overlay");

    this.isLoading.next(false);
  }
}
