import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { TaskpageComponent } from './layout/taskpage/taskpage.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/profile', pathMatch: 'full'
  },
  { path: 'profile', component: HomepageComponent },
  { path: 'taskdetail', component: TaskpageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
