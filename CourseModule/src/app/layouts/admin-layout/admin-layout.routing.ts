import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { RegisterComponent } from 'app/auth/register/register.component';
import { SingleItemComponent } from 'app/single-item/single-item.component';
import { NewItemComponent } from 'app/new-item/new-item.component';
import { DetailedCourseComponent } from 'app/detailed-course/detailed-course.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisterComponent },
    { path: 'editCourse/:courseId', component: SingleItemComponent },
    { path: 'addCourse', component: NewItemComponent },
    { path: 'course-detailed/:id', component: DetailedCourseComponent }
];
