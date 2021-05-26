import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgentTableComponent } from './components/agent-table/agent-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';
import { VirementComponent } from './components/virement/virement.component';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgentTableComponent,
    VirementComponent,
  
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    BrowserAnimationsModule,
 

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
