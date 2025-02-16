import { Routes } from '@angular/router';

export enum APP_ROUTES {
  INTRODUCTION = 'introduction',
}

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTES.INTRODUCTION,
  },
  {
    path: APP_ROUTES.INTRODUCTION,
    loadComponent: () =>
      import('./components/introduction/introduction.component').then(
        (c) => c.IntroductionComponent
      ),
  },
];
