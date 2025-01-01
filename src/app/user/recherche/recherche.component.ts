import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
  searchText: string = '';// Stocke la recherche saisie par l'utilisateur
categories = [
  {
    id: 1,
    name: 'Art',
    description: 'Toutes les formes d’expression artistique, incluant la peinture, la sculpture et la photographie.',
    formations: [
      { title: 'Peinture Contemporaine', shortDescription: 'Découvrir les techniques modernes de peinture.' },
      { title: 'Photographie Digitale', shortDescription: 'Apprenez à capturer des images incroyables.' }
    ]
  },
  {
    id: 2,
    name: 'Informatique',
    description: 'Les technologies de l’information, le développement logiciel, et la programmation.',
    formations: [
      { title: 'Développement Web', shortDescription: 'HTML, CSS, JavaScript et frameworks modernes.' },
      { title: 'Cybersécurité', shortDescription: 'Maîtriser les bases de la sécurité informatique.' }
    ]
  },
  {
    id: 3,
    name: 'Gestion',
    description: 'Techniques de management, de leadership et de planification stratégique.',
    formations: [
      { title: 'Management Agile', shortDescription: 'Principes et pratiques de la méthodologie Agile.' },
      { title: 'Leadership Moderne', shortDescription: 'Comment inspirer et diriger une équipe.' }
    ]
},
{
  id: 5,
  name: 'Langues',
  description: 'L’apprentissage et la maîtrise de différentes langues étrangères.',
  formations: [
    { title: 'Anglais Commercial', shortDescription: 'Anglais pour le monde des affaires.' },
    { title: 'Espagnol Débutant', shortDescription: 'Les bases de la langue espagnole.' }
  ]
},
{
  id: 6,
  name: 'Marketing',
  description: 'Les stratégies de communication, de publicité et d’analyse de marché.',
  formations: [
    { title: 'SEO et SEM', shortDescription: 'Optimisation pour les moteurs de recherche.' },
    { title: 'Publicité Digitale', shortDescription: 'Créer et gérer des campagnes publicitaires en ligne.' }
  ]
},
{
  id: 7,
  name: 'Design',
  description: 'Les concepts de design graphique, de design UI/UX, et d’architecture visuelle.',
  formations: [
    { title: 'Design UI/UX', shortDescription: 'Créer des interfaces utilisateur modernes.' },
    { title: 'Graphisme 3D', shortDescription: 'Introduction à la conception graphique en 3D.' }
  ]
}
];
filteredFormations: { categoryName: string; title: string; shortDescription: string }[] = [];//Définit un tableau vide pour stocker les formations filtrées après la recherche

  public search() {
    const results = [];//Initialise un tableau pour stocker les résultats temporaires.
    for (const category of this.categories) {
      for (const formation of category.formations) {
        if (
          formation.title.toLowerCase().includes(this.searchText.toLowerCase()) ||//Vérifie si le titre de la formation contient le texte saisi dans searchQuery, sans tenir compte de la casse.
          formation.shortDescription.toLowerCase().includes(this.searchText.toLowerCase())
        ) {
          results.push({
            categoryName: category.name,
            title: formation.title,
            shortDescription: formation.shortDescription
          });
        }
      }
    }
    this.filteredFormations = results;
  }
  
  }
