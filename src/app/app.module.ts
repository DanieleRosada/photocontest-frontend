import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SigUpComponent } from './sig-up/sig-up.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { RankUsersComponent } from './rank-users/rank-users.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MenuComponent } from './menu/menu.component';
import { RankPhotosComponent } from './rank-photos/rank-photos.component';


const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'photo/:id', component: PhotoDetailsComponent },
      { path: 'rankusers', component: RankUsersComponent },
      { path: 'rankphotos', component: RankPhotosComponent },
      { path: 'user', component: ManageUserComponent }, 
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'sigup', component: SigUpComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SigUpComponent,
    PhotoDetailsComponent,
    RankUsersComponent,
    ManageUserComponent,
    MenuComponent,
    RankPhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
