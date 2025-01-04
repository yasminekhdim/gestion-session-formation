import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../services/formateur.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formateur',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './formateur.component.html',
  styleUrl: './formateur.component.css'
})
export class FormateurComponent implements OnInit {
  public formateurs: any[] = [];
  constructor(
    private formateurService: FormateurService
  ){}
  getFormateurs(){
    this.formateurs=this.formateurService.formateurs;
  }
  ngOnInit(): void {
    this.getFormateurs();
  }
  DeleteFormateur(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce formateur ?')) {
      const success = this.formateurService.supprimerFormateur(id);
      if (success) {
        this.formateurs = [...this.formateurService.formateurs]; //actualisation des données
        alert('Formateur supprimée avec succès.');
      } else {
        alert('Erreur : Formateur introuvable.');
      }
    }
  }
}
