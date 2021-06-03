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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgenceComponent } from './components/agence/agence.component';
import { AgentComponent } from './components/agent/agent.component';
import { LoginComponent } from './components/login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgentTableComponent,
    VirementComponent,
    AgenceComponent,
    AgentComponent,
    LoginComponent
  
    
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
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule
   
 

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
