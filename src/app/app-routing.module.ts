import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  exports: [
    RouterModule 
  ], 
  imports: [ 
    RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
