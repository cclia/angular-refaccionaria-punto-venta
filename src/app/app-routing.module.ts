import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'app',
    loadChildren: () => import ('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  { path: '**', redirectTo: 'auth' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }