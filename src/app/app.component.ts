import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashbordPopulator } from './dashboard-drawer-populate'
import { MatListOption } from '@angular/material/list'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }


  title = 'farmisto-frotend';
  typesOfShoes: string[] = ['Home', 'Courses', 'Analytics', 'User Details', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  image_list: string[] = ['/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  dashboardPopulator: DashbordPopulator[] = [
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
  ];

  onPortalChange(options: MatListOption) {
    // map these MatListOptions to their values

    if ((options.value as DashbordPopulator).title == 'Home') {
      this.router.navigateByUrl("home");
    }

    else if ((options.value as DashbordPopulator).title == 'Courses') {
      this.router.navigateByUrl("courses");
    }

    else if ((options.value as DashbordPopulator).title == 'Analytics') {
      this.router.navigateByUrl("analytics");
    }

    else if ((options.value as DashbordPopulator).title == 'User Details') {
      this.router.navigateByUrl("user_details");
    }
    console.log((options.value as DashbordPopulator).title);
  }

}
