import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public categories: any[] = [];
  constructor(private cat: FormationService,
    private route: Router
  ) { }
  getFormation() {
    this.categories = this.cat.tabCategories;
  }
  ngOnInit(): void {
    this.getFormation();
  }
}
