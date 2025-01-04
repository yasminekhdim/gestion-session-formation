import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CondidatService } from '../../services/condidat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-condidat',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './condidat.component.html',
  styleUrl: './condidat.component.css'
})
export class CondidatComponent implements OnInit {
  public condidats: any []=[];
  nom!: string;     
  prenom!: string; 
  email!: string; 
  constructor(
    private route: ActivatedRoute,
    private cond: CondidatService
  ){}
  ngOnInit(): void {
    this.nom = this.route.snapshot.paramMap.get('nom') || '';
    this.prenom = this.route.snapshot.paramMap.get('prenom') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
    this.condidats.push({
      nom : this.nom,
      prenom: this.prenom,
      email: this.email
    })
    this.getCandidat();
  }
  getCandidat(){
    this.condidats=this.cond.condidats;
  }
  DeleteCondidat(email: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce condidat  ?')) {
      const success = this.cond.supprimerCondidat(email);
      if (success) {
        this.condidats = [...this.cond.condidats]; //actualisation des données
        alert('condidat supprimée avec succès.');
      } else {
        alert('Erreur : condidat introuvable.');
      }
    }
  }
}
