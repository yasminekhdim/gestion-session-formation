import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';// Stocke la recherche saisie par l'utilisateur
  public categories: any [] = []; 
filteredFormations: {id: number,
  titre: string,
  description: string,
  chargeHoraire: number,
  sessions: [],
  programmePdfUrl: string,}[] = [];//Définit un tableau vide pour stocker les formations filtrées après la recherche

  public search() {
    const results = [];//Initialise un tableau pour stocker les résultats temporaires.
    for (const category of this.categories) {
      for (const formation of category.formations) {
        if (
          formation.titre.toLowerCase().includes(this.searchText.toLowerCase()) ||//Vérifie si le titre de la formation contient le texte saisi dans searchQuery, sans tenir compte de la casse.
          formation.description.toLowerCase().includes(this.searchText.toLowerCase())
        ) {
          console.log("bonjour");
          results.push({
            id: formation.id,
            titre: formation.titre,
            description: formation.description,
            chargeHoraire: formation.chargeHoraire,
            sessions: formation.sessions,
            programmePdfUrl: formation.programmePdfUrl,
          });
        }
      }
    }
    this.filteredFormations = results;
  }
}
