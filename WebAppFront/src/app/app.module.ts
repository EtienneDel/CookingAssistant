import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route';
import { LandingModule } from './pages/landing/landing.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { LogoModule } from './components/logo/logo.module';
import { ProductModule } from './pages/product/product.module';
import { SolutionModule } from './pages/solution/solution.module';
import { AccountModule } from './pages/account/account.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingModule,
    RecipesModule,
    ProductModule,
    SolutionModule,
    AccountModule,
    AboutModule,
    ContactModule,
    LogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
