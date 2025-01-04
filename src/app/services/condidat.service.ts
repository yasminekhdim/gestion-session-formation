import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  public condidats=[
    {
      nom: "Ahmed",
      prenom:"jaziri",
      email:"ahmedjaziri@gmail.com"
    },
    {
      nom: "Yasmine",
      prenom:"khdim",
      email:"yasmineKhdim@gmail.com"
    },
    {
      nom: "Youssef",
      prenom:"trabelsi",
      email:"yousseftrabelsi14@gmail.com"
    }
  ]
  public supprimerCondidat(email: string): boolean {
    const index = this.condidats.findIndex((condidat) => condidat.email === email);
    if (index !== -1) {
      this.condidats.splice(index, 1);
      return true;
    }
  return false;
}
  constructor() { }
}
