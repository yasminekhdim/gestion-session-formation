import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  public tabCategories = [
    {
      id: 1,
      nom: 'Développement Web',
      description: 'Langages et technologies modernes pour créer des sites web dynamiques.',
      formations: [
        {
          id: 1,
          categorieId:1,
          titre: 'Angular Framework',
          description: 'Apprenez à créer des applications frontales avec Angular.',
          chargeHoraire: 40,
          sessions: [],
          programmePdfUrl: 'assets/pdf/programme-angular.pdf',
        },
        {
          id: 2,
          categorieId:1,
          titre: 'ReactJS Framework',
          description: 'Concevez des applications performantes avec React.',
          chargeHoraire: 35,
          sessions: [],
          programmePdfUrl: 'assets/pdf/programme-react.pdf',
        },
      ],
    },
    {
      id: 2,
      nom: 'Réseaux et Sécurité',
      description: 'Protection et infrastructures des réseaux informatiques.',
      formations: [
        {
          id: 3,
          categorieId:2,
          titre: 'Introduction aux réseaux',
          description: 'Découvrez les concepts essentiels des réseaux modernes.',
          chargeHoraire: 30,
          sessions: [],
          programmePdfUrl: 'assets/pdf/programme-reseaux.pdf',
        },
      ],
    },
  ];
  public supprimerFormation(id: number): boolean {
    for (let category of this.tabCategories) {
      const index = category.formations.findIndex((formation) => formation.id === id);
      if (index !== -1) {
        category.formations.splice(index, 1);
        return true;
      }
    }
    alert('Formation introuvable');
    return false;
  }
 
  constructor() { }
}
