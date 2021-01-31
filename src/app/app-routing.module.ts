import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PastelConfigComponent } from './modules/pastel-config/pastel-config.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'config',
        component: PastelConfigComponent,
        children: [
          {
            path: '', redirectTo: '/config/SDK', pathMatch: 'full'
          }
        ]
      },
      {
        path: 'config/:target',
        component: PastelConfigComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
