import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FusernaemComponent } from './fusernaem/fusernaem.component';

const routes: Routes = [
  {path:"", component:FusernaemComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
