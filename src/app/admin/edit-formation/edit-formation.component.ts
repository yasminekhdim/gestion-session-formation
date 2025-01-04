import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-formation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-formation.component.html',
  styleUrl: './edit-formation.component.css',
})
export class EditFormationComponent implements OnInit {
  id!: number; // Identifiant de la formation à éditer
  formation: any; // Object contenant la formation à éditer
  categories: any[] = []; // Liste des catégories pour peupler le formulaire

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router // Nécessaire pour la redirection
  ) {}

  ngOnInit(): void {
    // Charger les catégories
    this.categories = this.formationService.tabCategories;

    // Obtenir l'ID de la formation depuis la route
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);

    // Rechercher la formation à éditer
    this.findFormationById(this.id);
  }

  // Recherche et stocke la formation à éditer dans l'objet `formation`.

  findFormationById(id: number): void {
    for (let category of this.categories) {
      const found = category.formations.find((formation: any) => formation.id === id);
      if (found) {
        this.formation = found;
        break;
      }
    }

    if (!this.formation) {
      alert('Formation introuvable.');
      this.router.navigate(['/formation']); // Redirection 
    }
  }

  //Sauvegarde les modifications dans le service.

  onSave(): void {
    // La mise à jour est  effectuée  avec  [(ngModel)]
    alert('Formation sauvegardée avec succès.');
    this.router.navigate(['/formation']); // Rediriger vers la liste des formations
  }

   //Annulation : redirection vers la liste des formations.
  onCancel(): void {
    if (confirm('Voulez-vous annuler les modifications ?')) {
      this.router.navigate(['/formation']); // Retour à la liste des formations
    }
  }
}
