import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentTableComponent } from './components/agent-table/agent-table.component';
import { VirementComponent } from './components/virement/virement.component';

const routes: Routes = [
  {
    path: 'agent',
    component: AgentTableComponent,
},
{
  path: 'virement',
  component: VirementComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
