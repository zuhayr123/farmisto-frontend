import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashbordPopulator } from '../dashboard-drawer-populate'
import { MatListOption } from '@angular/material/list'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-content-control-screen',
  templateUrl: './content-control-screen.component.html',
  styleUrls: ['./content-control-screen.component.css']
})
export class ContentControlScreenComponent {

  constructor(private router: Router, private route : ActivatedRoute,
    private authenticationService: AuthenticationService
    ) {
  }

  title = 'farmisto-frotend';
  typesOfShoes: string[] = ['Home', 'Courses', 'Analytics', 'User Details', 'User Access', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  image_list: string[] = ['/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  dashboardPopulator: DashbordPopulator[] = [
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('User Access', "/assets/images/dashboard-icons/farmer.png")
    ];

  onPortalChange(options: MatListOption) {
    // map these MatListOptions to their values

    if ((options.value as DashbordPopulator).title == 'Home') {
      this.router.navigate(['home'], { relativeTo: this.route});
    }

    else if ((options.value as DashbordPopulator).title == 'Courses') {
      this.router.navigate(['courses'], { relativeTo: this.route});
    }

    else if ((options.value as DashbordPopulator).title == 'Analytics') {
      this.router.navigate(['analytics'], { relativeTo: this.route});
    }

    else if ((options.value as DashbordPopulator).title == 'User Details') {
      this.router.navigate(['user_details'], { relativeTo: this.route});
    }

    else if ((options.value as DashbordPopulator).title == 'User Access') {
      this.router.navigate(['user_access'], { relativeTo: this.route});
    }

    console.log((options.value as DashbordPopulator).title);
  }
  

  logout(){
    this.authenticationService.logout();
  }

}
