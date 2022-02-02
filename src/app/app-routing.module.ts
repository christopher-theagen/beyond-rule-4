import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', 
    // redirectTo: '/home', 
    redirectTo: '/forecasting', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    // redirectTo: '/home' 
    redirectTo: '/forecasting' 
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
