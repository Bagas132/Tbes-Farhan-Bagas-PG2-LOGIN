import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupScreenComponent } from './screens/signup-screen/signup-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { CarouselScreenComponent } from './screens/carousel-screen/carousel-screen.component';

const appRoutes: Routes = [
  {path: '' , component : CarouselScreenComponent},
  {path: 'signup' , component : SignupScreenComponent},
  {path: 'login' , component : LoginScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
