import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-content-info',
  templateUrl: './add-content-info.component.html',
  styleUrls: ['./add-content-info.component.css']
})
export class AddContentInfoComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
