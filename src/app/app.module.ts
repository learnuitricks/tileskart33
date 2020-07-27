import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/common/welcome/welcome.component';
import { TilesModule } from './component/tiles/tiles/tiles.module';
import { UserModule } from './component/users/user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
