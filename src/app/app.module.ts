import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { NgxDropzoneModule } from 'ngx-dropzone';


import { DialogContentAdditionComponent } from './dialog-content-addition/dialog-content-addition.component';
import { CourseAddComponentComponent } from './course-add-component/course-add-component.component';
import { AddContentInfoComponent } from './add-content-info/add-content-info.component';
import { ChildVideoContentInfoComponent } from './child-video-content-info/child-video-content-info.component';
import { ChildTextInfoComponent } from './child-text-info/child-text-info.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AnalyticsComponent,
    UserDetailsComponent,
    DialogContentAdditionComponent,
    CourseAddComponentComponent,
    AddContentInfoComponent,
    ChildVideoContentInfoComponent,
    ChildTextInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatTreeModule,
    MatCheckboxModule,
    MatMenuModule,
    MatRadioModule,
    MatButtonToggleModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
