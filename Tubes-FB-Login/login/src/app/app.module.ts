import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SignupScreenComponent } from './screens/signup-screen/signup-screen.component';
import { CarouselScreenComponent } from './screens/carousel-screen/carousel-screen.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';
import { NotificationService } from './shared/notification.service';


@NgModule({
   declarations: [
      AppComponent,
      LoginScreenComponent,
      SignupScreenComponent,
      CarouselScreenComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      MaterialsModule,
      BrowserAnimationsModule,
      Ng2CarouselamosModule,
      NgbModule
   ],
   providers: [
      AuthService,
      NotificationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
