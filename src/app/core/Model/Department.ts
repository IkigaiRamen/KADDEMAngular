import { Etudiant } from "./Etudiant";
import { Universite } from "./Universite";

//simport { Universite } from "./universite";
export class Department{
    id:number;
    nomDepart:String;
    code:String;
    type:String;
    
    description:String;
    universites:{nomUni:any}

    
}