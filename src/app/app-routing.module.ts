import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveModule } from './reactive/reactive.module';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
