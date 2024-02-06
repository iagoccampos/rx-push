import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component'
import { Sibling1Component } from './child/sibling-1/sibling-1.component'
import { Sibling2Component } from './child/sibling-2/sibling-2.component'
import { RxPush } from '@rx-angular/template/push';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule,
    RxPush
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
