import { Benificiaire } from "./benificiaire";

export interface Virement {
    id:bigint;
    dateCreation:Date;
    dateExecution:Date;
    montant:number;
    motif:string;
    benificiaire:Benificiaire;
}
