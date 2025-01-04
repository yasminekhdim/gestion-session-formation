import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  public formateurs=[
    {
      idFormateur:1,
      nom: "Alice Dupont",
      nomFormation: "Angular Framework",
      idFormation:1,
      idCategorie:1

    },
    {
      idFormateur:2,
      nom: "Jean Martin",
      nomFormation: "Angular Framework",
      idFormation:1,
      idCategorie:1
    },
    {
      idFormateur:3,
      nom : "Sophie Lambert",
      nomFormation: "Angular Framework",
      idFormation:1,
      idCategorie:1
    },
    {
      idFormateur:4,
      nom: "Thomas Roche",
      nomFormation: "ReactJS Framework",
      idFormation:2,
      idCategorie:1
    },
    {
      idFormateur:5,
      nom: "Nadia Belhadj",
      nomFormation: "Introduction aux réseaux",
      idFormation:3,
      idCategorie:2
    }
  ]
  public supprimerFormateur(id: number): boolean {
      const index = this.formateurs.findIndex((formateur) => formateur.idFormateur === id);
      if (index !== -1) {
        this.formateurs.splice(index, 1);
        return true;
      }
    return false;
  }
  constructor() { }
}
