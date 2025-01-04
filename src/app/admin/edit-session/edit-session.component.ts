import { Component } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-session',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-session.component.html',
  styleUrl: './edit-session.component.css'
})
export class EditSessionComponent {
  id!: number;
   public sessions: any[] = [];
    constructor(
      private sess: SessionsService,
      private route: ActivatedRoute,
  
    ) { }
    getSession() {
      this.sessions = this.sess.sessions;
    }
    ngOnInit(): void {
      this.getSession();
      this.id =+(this.route.snapshot.paramMap.get('id')|| 0);
    }
    onSave(){}
    onCancel(){}
}
