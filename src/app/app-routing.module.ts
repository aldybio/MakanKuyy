import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'awal',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'trivia',
    loadChildren: () => import('./trivia/trivia.module').then( m => m.TriviaPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'awal',
    loadChildren: () => import('./awal/awal.module').then( m => m.AwalPageModule)
  },
  {
    path: 'forgotpass1',
    loadChildren: () => import('./forgotpass1/forgotpass1.module').then( m => m.Forgotpass1PageModule)
  },
  {
    path: 'forgotpass2',
    loadChildren: () => import('./forgotpass2/forgotpass2.module').then( m => m.Forgotpass2PageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'admin/restaurants',
    loadChildren: () => import('./admin/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  // {
  //   path: 'admin/menus',
  //   loadChildren: () => import('./admin/menus/menus.module').then( m => m.MenusPageModule)
  // },
  {
    path: 'admin/trivias',
    loadChildren: () => import('./admin/trivias/trivias.module').then( m => m.TriviasPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
