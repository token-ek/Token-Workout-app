import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /*{
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },*/
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
 /* {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },*/
  {
    path: 'termsguest',
    loadChildren: () => import('./pages/termsguest/termsguest.module').then( m => m.TermsguestPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./pages/workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./pages/exercises/exercises.module').then( m => m.ExercisesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'motivation',
    loadChildren: () => import('./pages/motivation/motivation.module').then( m => m.MotivationPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'bmiinfo',
    loadChildren: () => import('./pages/bmiinfo/bmiinfo.module').then( m => m.BmiinfoPageModule)
  },
  {
    path: 'diets',
    loadChildren: () => import('./pages/diets/diets.module').then( m => m.DietsPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'levels',
    loadChildren: () => import('./pages/levels/levels.module').then( m => m.LevelsPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'equipments',
    loadChildren: () => import('./pages/equipments/equipments.module').then( m => m.EquipmentsPageModule)
  },
  {
    path: 'bodyparts',
    loadChildren: () => import('./pages/bodyparts/bodyparts.module').then( m => m.BodypartsPageModule)
  },
  {
    path: 'wgoals/:id/:title',
    loadChildren: () => import('./pages/wgoals/wgoals.module').then( m => m.WgoalsPageModule)
  },
  {
    path: 'wlevels/:id/:title',
    loadChildren: () => import('./pages/wlevels/wlevels.module').then( m => m.WlevelsPageModule)
  },
  {
    path: 'ebodyparts/:id/:title',
    loadChildren: () => import('./pages/ebodyparts/ebodyparts.module').then( m => m.EbodypartsPageModule)
  },
  {
    path: 'cdiets/:id/:title',
    loadChildren: () => import('./pages/cdiets/cdiets.module').then( m => m.CdietsPageModule)
  },
  {
    path: 'tposts/:id/:title',
    loadChildren: () => import('./pages/tposts/tposts.module').then( m => m.TpostsPageModule)
  },
  {
    path: 'eequipments/:id/:title',
    loadChildren: () => import('./pages/eequipments/eequipments.module').then( m => m.EequipmentsPageModule)
  },
  {
    path: 'edetails/:id',
    loadChildren: () => import('./pages/edetails/edetails.module').then( m => m.EdetailsPageModule)
  },
  {
    path: 'wdetails/:id',
    loadChildren: () => import('./pages/wdetails/wdetails.module').then( m => m.WdetailsPageModule)
  },
  {
    path: 'ddetails/:id',
    loadChildren: () => import('./pages/ddetails/ddetails.module').then( m => m.DdetailsPageModule)
  },
  {
    path: 'pdetails/:id',
    loadChildren: () => import('./pages/pdetails/pdetails.module').then( m => m.PdetailsPageModule)
  },
  {
    path: 'weday/:id/:day',
    loadChildren: () => import('./pages/weday/weday.module').then( m => m.WedayPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
