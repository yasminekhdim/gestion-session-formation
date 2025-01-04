import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../../services/condidat.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-condidat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-condidat.component.html',
  styleUrl: './edit-condidat.component.css'
})
export class EditCondidatComponent implements OnInit {
  email!:string;
  public condidats : any[]=[];
  constructor(
    private cond : CondidatService,
    private route: ActivatedRoute
  ){}
  getCondidat(){
    this.condidats=this.cond.condidats;
  }
  ngOnInit(): void {
    this.getCondidat();
    this.email= this.route.snapshot.paramMap.get('email') || ''; 
  }
  onSave(){}
  onCancel(){}
}
