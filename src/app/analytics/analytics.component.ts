import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { singles } from './dumy_data';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  singles!: any[];
  view: [number, number] = [1000, 500];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    name: 'night',
    selectable: false,
    group: ScaleType.Linear,
    domain: [
      '#2B1B5A',
      '#501356',
      '#183356',
      '#28203F',
      '#391B3C',
      '#1E2B3C',
      '#120634',
      '#2D0432',
      '#051932',
      '#453080',
      '#75267D',
      '#2C507D',
      '#4B3880',
      '#752F7D',
      '#35547D'
    ]
  }

  constructor() {
    Object.assign(this, { singles });
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

}
