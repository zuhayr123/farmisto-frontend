import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { singles } from './dumy_data';
import { multi } from './dummy_user_available';
import { bar_dummy } from './bar_char_dummy_data';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  singles!: any[];
  view: [number, number] = [1000, 500];

  multi!: any[];
  view_line_graph: [number, number] = [700, 300];

  bar_dummy!: any[];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Users';
  timeline: boolean = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;

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
    Object.assign(this, { multi });
    Object.assign(this, {bar_dummy});
  }

  ngOnInit(): void {
    this.view = [window.innerWidth / 1.35, 400];
    this.view_line_graph = [window.innerWidth / 1.2, 400];
  }

  onSelect(event: any) {
    console.log(event);
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 400];
    this.view_line_graph = [event.target.innerWidth/ 1.2, 400];
  }

}
