import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { ServiceCallService } from './service-call.service';

import { AppComponent } from './app.component';
import { LimitToPipe } from './limit-to.pipe';
import { SortingPipe } from './sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LimitToPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServiceCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
