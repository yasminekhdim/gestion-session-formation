import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    {
      id: 1,
      name: 'Art',
      description: 'Toutes les formes d’expression artistique, incluant la peinture, la sculpture et la photographie.',
      formations: [
        { title: 'Peinture Contemporaine', Description: 'Découvrir les techniques modernes de peinture.' },
        { title: 'Photographie Digitale', Description: 'Apprenez à capturer des images incroyables.' }
      ]
    },
    {
      id: 2,
      name: 'Informatique',
      description: 'Les technologies de l’information, le développement logiciel, et la programmation.',
      formations: [
        { title: 'Développement Web', Description: 'HTML, CSS, JavaScript et frameworks modernes.' },
        { title: 'Cybersécurité', Description: 'Maîtriser les bases de la sécurité informatique.' }
      ]
    },
    {
      id: 3,
      name: 'Gestion',
      description: 'Techniques de management, de leadership et de planification stratégique.',
      formations: [
        { title: 'Management Agile', Description: 'Principes et pratiques de la méthodologie Agile.' },
        { title: 'Leadership Moderne', Description: 'Comment inspirer et diriger une équipe.' }
      ]
    },
    {
      id: 5,
      name: 'Langues',
      description: 'L’apprentissage et la maîtrise de différentes langues étrangères.',
      formations: [
        { title: 'Anglais Commercial', Description: 'Anglais pour le monde des affaires.' },
        { title: 'Espagnol Débutant', Description: 'Les bases de la langue espagnole.' }
      ]
    },
    {
      id: 6,
      name: 'Marketing',
      description: 'Les stratégies de communication, de publicité et d’analyse de marché.',
      formations: [
        { title: 'SEO et SEM', Description: 'Optimisation pour les moteurs de recherche.' },
        { title: 'Publicité Digitale', Description: 'Créer et gérer des campagnes publicitaires en ligne.' }
      ]
    },
    {
      id: 7,
      name: 'Design',
      description: 'Les concepts de design graphique, de design UI/UX, et d’architecture visuelle.',
      formations: [
        { title: 'Design UI/UX', Description: 'Créer des interfaces utilisateur modernes.' },
        { title: 'Graphisme 3D', Description: 'Introduction à la conception graphique en 3D.' }
      ]
    }
  ];
  redirectToCategory(id: number) {

  }
}
