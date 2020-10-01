import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginvalidsComponent } from './loginvalids/loginvalids.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
   {path:'log', component:LogsComponent},
   {path:'loginvalid', component:LoginvalidsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
