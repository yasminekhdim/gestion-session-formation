import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit {
  public categories: any[] = [];
  constructor(private categorie: FormationService) {

  }
  getFormation() {
    this.categories = this.categorie.tabCategories;
  }
  ngOnInit(): void {
    this.getFormation();
  }
  DeleteFormation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      const success = this.categorie.supprimerFormation(id);
      if (success) {
        this.categories = [...this.categorie.tabCategories]; //actualisation des données
        alert('Formation supprimée avec succès.');
      } else {
        alert('Erreur : Formation introuvable.');
      }
    }
  }
}
