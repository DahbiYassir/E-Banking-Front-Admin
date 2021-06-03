import { Component, OnInit } from '@angular/core';
import { AgentsService } from 'src/app/services/agents.service';
import { Agent } from 'src/app/models/agent';
import { HttpErrorResponse } from '@angular/common/http';
import { Agence } from 'src/app/models/agence';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { NavbarsService } from 'src/app/services/navbars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  settings = {
    delete: {
      confirmDelete : true,
      deleteButtonContent: 'Supprimer',
      saveButtonContent: 'Enregistrer',
      cancelButtonContent: 'Annuler'
   },
    add: {
      createButtonContent: 'Ajouter Agent',
      cancelButtonContent: 'Annuler',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: 'Modifier',
      saveButtonContent: 'Enregistrer',
      cancelButtonContent: 'Annuler',
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        editable:false,
        addable: false
      },
      nom:{
        title: 'Nom'
      },
      prenom:{
        title: 'Prenom'
      },
      adresse: {
        title: 'Adresse'
      },
      email: {
        title: 'Email'
      },
      cin: {
        title: 'Cin'
      },
      telephone:{
        title: 'Telephone'
      },
      /*agence: {
        type:'html',
        editor: {
          type: 'list',
          config: {                  
            list: [],  

          },
          
        },
        title: 'Agence'
              
      },*/ 
      username:{
        title: 'Username'
      },
      password:{
        title: 'Password'
      }
      
    }
  };

  data =  [{
    id:"",
    nom:"",
    prenom:"",
    adresse: "",
    email:"",
    cin:"",
    telephone:"",
    //agence:"",
    username:"",
    password:""
  }];
  agents : Agent[]=[];
  agences : Agence[]=[];
  agence : any;
  constructor(private agentService:AgentsService, public nav : NavbarsService, private router :Router) { 
    this.agence=this.router.getCurrentNavigation().extras.state;
  }
  
  ngOnInit(): void {
    this.getAgents();
    //this.getListAgences();
    this.nav.show();

    // this.loginservice
    //   .authentificate('admin','admin')
    //   .subscribe(
    //     (data) => {
    //       console.log("data login : " +JSON.stringify(data));
    //     },
    //     (error) => {
    //       console.log("data login null ")
    //     }
    //   );

     // console.log("agent " + this.loginservice.isUserLoggedIn());
  }

  getAgents(){
    this.agentService.getAgent(this.agence.id).subscribe(
      (response : Agent[])=>{
        this.agents=response;
        console.log(response);
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message);
      }
    );

}
  onAddAgent(event){
   // console.log(this.settings.columns.agence.editor.config.list) 
    if(window.confirm('êtes-vous sur de vouloir creér cet agent ?')){
      console.log(event.newData)
      event.newData.agence=this.agence
      console.log(event.newData.agence)
      this.agentService.addAgent(event.newData).subscribe(
        response => {
          this.getAgents();
        },
        (error:HttpErrorResponse) => {
          console.log(error);
          
          }
      )
    }
  }

  onUpdateAgent(event){
    if(window.confirm('êtes-vous sur de vouloir modifier cet agent ?')){
      this.agentService.updateAgent(event.newData).subscribe(
        response => {
          console.log("Edit : "+ response);
          this.getAgents();
        },
        (error:HttpErrorResponse) => {
          console.log(error);
          
          }
      )
    }
  }

  onDeleteAgent(event){
    if(window.confirm('êtes-vous sur de vouloir supprimer cet agent ?')){
      this.agentService.deleteAgent(event.data.id).subscribe(
        response => {
          console.log("delete : "+ response);
          this.getAgents();
        },
        (error:HttpErrorResponse) => {
          alert("Veuillez supprimer les clients liés à cet agent en premier")
          console.log(error);
          
          }
      )
    }
  }

  getListAgences(){
    
    this.agentService.getAgence().subscribe(
      (response:Agence[])=>{
        this.agences=response;
        var listObj = [];
        console.log(this.agences)  
        
        this.agences.forEach(function(agence,index){
          console.log("agence : " +agence.id)
         
         console.log('JSON : '+ JSON.stringify(agence)) 
         
          listObj.push({
                title: agence.id,
                Value: agence
                
              })
                
        });
      //   this.agences.map(function (array,index) {
          
      //     console.log("Array : " +array)
      //     listObj.push({
      //       title: array.id,
      //       value: index+1
      //     }); 
          
      // });
          /*this.settings.columns.agence.editor.config.list = listObj;
          this.settings = Object.assign({}, this.settings);*/
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message)
      }
    );
  }
}
