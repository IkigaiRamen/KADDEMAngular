import { Etudiant } from "./Etudiant";
import { Specialite } from "./Specialite";

export class Contrat {
    idContart: number;
    dateDebutContrat : Date;
    dateFinContrat: Date;
    archive: boolean;
    specialite: Specialite;
    etudiant: Etudiant;
    montantContrat : number;
}