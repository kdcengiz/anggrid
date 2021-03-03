import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KdGridComponent } from './kd-grid/kd-grid.component';
import { HomeComponent } from './Home/Home.component';
import { MenuComponent } from './Menu/Menu.component';
import { UserService } from 'src/services/User.service';

@NgModule({
  declarations: [			
    AppComponent,
      KdGridComponent,
      HomeComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
