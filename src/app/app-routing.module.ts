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
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './common/guards/auth.guard';
const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  {
    path: 'ccp', component: ContentControlScreenComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard], },
      { path: 'add_course', component: CourseAddComponentComponent, canActivate: [AuthGuard], },
      { path: 'user_details', component: UserDetailsComponent, canActivate: [AuthGuard], },
      { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard], },
      {
        path: 'add_course_content', component: AddContentInfoComponent,
        children: [
          {
            path: 'video_content', component: ChildVideoContentInfoComponent, canActivate: [AuthGuard],
          },

          {
            path: 'text_content', component: ChildTextInfoComponent, canActivate: [AuthGuard],
          },
        ]
      },
      { path: 'user-info', component: UserInformationComponent , canActivate: [AuthGuard],},
    ]
  },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }