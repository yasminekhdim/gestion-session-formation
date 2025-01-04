import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../services/formateur.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-formateur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-formateur.component.html',
  styleUrl: './edit-formateur.component.css'
})
export class EditFormateurComponent implements OnInit {
  public formateurs: any []=[];
  id!: number; // Identifiant de la formation à éditer
  constructor(
    private form: FormateurService,
    private route : ActivatedRoute
  ){}
  getFormateurs(){
    this.formateurs=this.form.formateurs;
  }
  ngOnInit(): void {
    this.getFormateurs();
    this.id = +(this.route.snapshot.paramMap.get('id') || 0 );
  }
  onSave(){}
  onCancel(){}
}
