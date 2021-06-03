import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentTableComponent } from './components/agent-table/agent-table.component';
import { VirementComponent } from './components/virement/virement.component';
import { AgenceComponent } from './components/agence/agence.component';
import { AgentComponent } from './components/agent/agent.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: '',
     component: LoginComponent, 
     canActivate: [AuthGuardService] 
  },
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
},
{
    path: 'login',
    component: LoginComponent,
},
{
  path: 'virement',
  component: VirementComponent,
},
{
  path: 'agence',
  component: AgenceComponent,
},
{
  path: 'agent',
  component: AgentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
