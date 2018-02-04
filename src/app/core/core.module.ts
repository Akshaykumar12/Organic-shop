import { NgModule } from '@angular/core';
import { BootstrapNavbarComponent } from './components/bootstrap-navbar/bootstrap-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([]),
    
  ],
  declarations: [
    BootstrapNavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  exports:[BootstrapNavbarComponent]
})
export class CoreModule { }
