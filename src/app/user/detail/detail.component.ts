import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { SessionsService } from '../../services/sessions.service';
import { FormateurService } from '../../services/formateur.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  id!: number; // Variable pour stocker l'ID
  public categories: any[] = [];
  public sessions: any[] = [];
  public formateurs: any[] = [];
  constructor(private cat: FormationService,
    private sess: SessionsService,
    private form: FormateurService,
    private route: ActivatedRoute,

  ) { }
  getFormation() {
    this.categories = this.cat.tabCategories;
  }
  getSession() {
    this.sessions = this.sess.sessions;
  }
  getFormateur() {
    this.formateurs = this.form.formateurs;
  }
  ngOnInit(): void {
    this.getFormation();
    this.getFormateur();
    this.getSession();
    this.id =+(this.route.snapshot.paramMap.get('id')|| 0);
  }
  
}
