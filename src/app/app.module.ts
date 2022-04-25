import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { coffeeEffects } from './ngrx-store/effects/coffee.effect';
import { HttpClientModule } from '@angular/common/http';
import { coffeeReducer } from './ngrx-store/reducers/coffee.reducer';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([coffeeEffects]),
    StoreModule.forRoot({ coffee: coffeeReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
