import { Component, OnInit } from '@angular/core';
import { AgencesService } from 'src/app/services/agences.service';
import { Agence } from 'src/app/models/agence';
import { HttpErrorResponse } from '@angular/common/http';
import { NavbarsService } from 'src/app/services/navbars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'Actions',

      custom: [
        {
          name: 'ADD Agent',
          title: 'Account '
          
        }
       
      ],
      
    },
    delete: {
      confirmDelete : true,
      deleteButtonContent: 'Supprimer',
      saveButtonContent: 'Enregistrer',
      cancelButtonContent: 'Annuler'
   },
    add: {
      createButtonContent: 'Ajouter Agence',
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
      adresse: {
        title: 'Adresse'
      },
      email: {
        title: 'Email'
      },
      fax: {
        title: 'Fax'
      },
      nom:{
        title: 'Nom'
      },
      telephone:{
        title: 'Telephone'
      },
      
    }
  };

  data =  [{
    id:"",
    adresse: "",
    email:"",
    fax: "",
    nom:"",
    telephone:"",
    
  }];
  agences : Agence[]=[];
  constructor(private agenceService:AgencesService,public nav : NavbarsService,private router:Router) { }

  ngOnInit(): void {
    this.getAgences();
    this.nav.show();
  }

  getAgences(){
    this.agenceService.getAgence().subscribe(
      (response:Agence[]) =>{
        this.agences = response;
        console.log(response);
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message)
      }
    );
  }
  onAddAgence(event){
    
      if(window.confirm("êtes-vous sur de vouloir creér cette agence ?")){
        this.agenceService.addAgence(event.newData).subscribe(
          response => {
            console.log("Ajout : "+ response);
            this.getAgences();
          },
          (error:HttpErrorResponse) => {
            console.log(error);
            
            }
        );
      }
  }

  onUpdateAgence(event){
    if(window.confirm("êtes-vous sur de vouloir modifier cette agence ?")){
      console.log(event.newData)
      this.agenceService.updateAgence(event.newData).subscribe(
        response => {
          console.log("Edit : " + response)
          this.getAgences();
        },
        (error:HttpErrorResponse) => {
          console.log(error);
          
          }
      );
    }
    }
  onDeleteAgence(event){
    if(window.confirm("êtes-vous sur de vouloir supprimer cette agence ?")){
      console.log(event.data.id)
      this.agenceService.deleteAgence(event.data.id).subscribe(
        response =>{
          console.log ("Delete : " + response)
          this.getAgences();
        },
        (error:HttpErrorResponse) => {
          console.log(error);
          
          }
      )
    }
  }

  onCustomAction(event:any):void{
    console.log(event);
    console.log('row selected: '+event.data.id);
    this.router.navigate(['/agent'],{ state: event.data });
    
  }
  onUserRowSelect(event:any):void{
    console.log(event);
    console.log('row selected: '+event.data.id);
    this.router.navigate(['/agent'],{ state: event.data });
    
  }
    

}
