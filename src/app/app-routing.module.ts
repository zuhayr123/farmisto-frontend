import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { UserDetailsComponent } from './user-details/user-details.component'
import { CourseAddComponentComponent } from './course-add-component/course-add-component.component';
import { AddContentInfoComponent } from './add-content-info/add-content-info.component';
import { ChildVideoContentInfoComponent } from './child-video-content-info/child-video-content-info.component';
import { ChildTextInfoComponent } from './child-text-info/child-text-info.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { ContentControlScreenComponent } from './content-control-screen/content-control-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  {
    path: 'ccp', component: ContentControlScreenComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'add_course', component: CourseAddComponentComponent },
      { path: 'user_details', component: UserDetailsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      {
        path: 'add_course_content', component: AddContentInfoComponent,
        children: [
          {
            path: 'video_content', component: ChildVideoContentInfoComponent
          },

          {
            path: 'text_content', component: ChildTextInfoComponent
          },
        ]
      },
      { path: 'user-info', component: UserInformationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }