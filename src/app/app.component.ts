import { Component } from '@angular/core';
import {DashbordPopulator} from './dashboard-drawer-populate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmistoFrotend';
  typesOfShoes: string[] = ['Home', 'Courses', 'Analytics', 'User Details', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  image_list: string[] = ['/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', '/assets/images/dashboard-icons/course.png', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  dashboardPopulator: DashbordPopulator[] = [
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
    new DashbordPopulator('Home', "/assets/images/dashboard-icons/house.png"),
    new DashbordPopulator('Courses', "/assets/images/dashboard-icons/course.png"),
    new DashbordPopulator('Analytics', "/assets/images/dashboard-icons/graph.png"),
    new DashbordPopulator('User Details', "/assets/images/dashboard-icons/farmer.png"),
];


}
