import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { CoreModule } from './core/core.module';
import { OrderDetailComponent } from './shared/components/order-detail/order-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AdminModule,
    SharedModule,
    ShoppingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path:'',component:ProductsComponent },
      { path:'login', component:LoginComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
