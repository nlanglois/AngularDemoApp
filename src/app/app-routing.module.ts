import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './common/home.component';
import { AdminComponent } from './common/admin.component';
import { ContactComponent } from './common/contact.component';
import { ErrorComponent } from './common/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
    ],
  exports: [
      RouterModule,
    ]
})
export class AppRoutingModule { }
