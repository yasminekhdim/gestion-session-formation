import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent implements OnInit{
  public sessions: any[] = [];
    constructor(private sess: SessionsService) {
  
    }
    getSession() {
      this.sessions = this.sess.sessions;
    }
    ngOnInit(): void {
      this.getSession();
    }
}
