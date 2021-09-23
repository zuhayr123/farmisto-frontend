import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { UserDetailsComponent } from './user-details/user-details.component'
import { CourseAddComponentComponent } from './course-add-component/course-add-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'courses',component: CoursesComponent},
  {path: 'add_course', component: CourseAddComponentComponent},
  { path: 'user_details', component: UserDetailsComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
