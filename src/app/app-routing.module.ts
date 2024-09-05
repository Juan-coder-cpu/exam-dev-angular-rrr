import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    {
      path: '',
      loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule)
    },
    {
      path: 'index',
      loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule)
    },
    {
      path: 'conversations',
      loadChildren: () => import('./pages/conversations/conversations.module').then((m) => m.ConversationsModule)
    },
    {
      path: 'date-calculate',
      loadChildren: () => import('./pages/date-calculate/date-calculate.module').then((m) => m.DateCalculateModule)
    },
    {
      path: 'user',
      loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
    },
  ], canActivate: [AuthGuard]},
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'admin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
