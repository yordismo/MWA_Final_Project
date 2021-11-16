import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { RegisterComponent } from 'app/auth/register/register.component';
import { SingleItemComponent } from 'app/single-item/single-item.component';
import { NewItemComponent } from 'app/new-item/new-item.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisterComponent },
    { path: 'editCourse/:courseId', component: SingleItemComponent },
    { path: 'addCourse', component: NewItemComponent },
];
