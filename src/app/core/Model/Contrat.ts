import { Etudiant } from "./Etudiant";
import { Specialite } from "./Specialite";

export class Contrat {
    id: number;
    dateDebutContrat : Date;
    dateFinContrat: Date;
    archive: boolean;
    specialite: Specialite;
    etudiant: Etudiant;
    montantContrat : number;
}