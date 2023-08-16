import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ui1Component } from './ui1/ui1.component';
import { Ui2Component } from './ui2/ui2.component';
import { Ui3Component } from './ui3/ui3.component';

const routes: Routes = [
  {path:'ui1',component:Ui1Component},
  {path:'ui2',component:Ui2Component},
  {path:'ui3',component:Ui3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
