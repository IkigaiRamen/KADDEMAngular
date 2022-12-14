import { detailEquipe } from "./detailEquipe";
import { Etudiant } from "./Etudiant";

export class Equipe {

     id!: number;
    nomEquipe!: string;
    etudiants!:[Etudiant];
    detailEquipe!:detailEquipe;
}