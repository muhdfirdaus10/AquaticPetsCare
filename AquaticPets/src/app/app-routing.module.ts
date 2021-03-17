import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'instruction',
    loadChildren: () => import('./instruction/instruction.module').then( m => m.InstructionPageModule)
  },
  {
    path: 'deseases01',
    loadChildren: () => import('./deseases01/deseases01.module').then( m => m.Deseases01PageModule)
  },
  {
    path: 'deseases02',
    loadChildren: () => import('./deseases02/deseases02.module').then( m => m.Deseases02PageModule)
  },
  {
    path: 'deseases03',
    loadChildren: () => import('./deseases03/deseases03.module').then( m => m.Deseases03PageModule)
  },
  {
    path: 'deseases04',
    loadChildren: () => import('./deseases04/deseases04.module').then( m => m.Deseases04PageModule)
  },
  {
    path: 'deseases05',
    loadChildren: () => import('./deseases05/deseases05.module').then( m => m.Deseases05PageModule)
  },
  {
    path: 'deseases06',
    loadChildren: () => import('./deseases06/deseases06.module').then( m => m.Deseases06PageModule)
  },
  {
    path: 'deseases07',
    loadChildren: () => import('./deseases07/deseases07.module').then( m => m.Deseases07PageModule)
  },
  {
    path: 'deseases08',
    loadChildren: () => import('./deseases08/deseases08.module').then( m => m.Deseases08PageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'gold',
    loadChildren: () => import('./gold/gold.module').then( m => m.GoldPageModule)
  },
  {
    path: 'guppy',
    loadChildren: () => import('./guppy/guppy.module').then( m => m.GuppyPageModule)
  },
  {
    path: 'angel',
    loadChildren: () => import('./angel/angel.module').then( m => m.AngelPageModule)
  },
  {
    path: 'betta',
    loadChildren: () => import('./betta/betta.module').then( m => m.BettaPageModule)
  },
  {
    path: 'molly',
    loadChildren: () => import('./molly/molly.module').then( m => m.MollyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
