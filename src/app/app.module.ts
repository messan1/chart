import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxGraphModule} from "@swimlane/ngx-graph"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
