import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/constants/routes-config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: ROUTES.routePath.home,
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTES.routePath.login,
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./features/home/components/home.component').then(
  //       (m) => m.LoginModule
  //     ),
  // },
  // {
  //   path: 'parola-del-giorno',
  //   data: {
  //     title: 'Parola del giorno',
  //   },
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'error',
  //   data: {
  //     title: 'Errore',
  //   },
  //   loadChildren: () =>
  //     import('./pages/error/error.module').then((m) => m.ErrorModule),
  // },
  // {
  //   path: '**',
  //   data: {
  //     title: 'Errore',
  //   },
  //   loadChildren: () =>
  //     import('./pages/error/error.module').then((m) => m.ErrorModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
