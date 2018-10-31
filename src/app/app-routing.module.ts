import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeetingProfileComponent } from './seeting-profile/seeting-profile.component';
import { SeetingContactComponent } from './seeting-contact/seeting-contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {
    path: 'settings',
    component: SettingComponent,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full' },
      {path: 'profile', component: SeetingProfileComponent},
      {path: 'contact', component: SeetingContactComponent},
      {path: '**',  redirectTo: 'profile', pathMatch: 'full'}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
