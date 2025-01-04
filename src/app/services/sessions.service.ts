import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  sessions = [
    {
      idSession: 1,
      idFormation: 1,
      formateurs: [],
      dateDebut: '2024-01-10',
      dateFin: '2024-01-15',
    },
    {
      idSession: 2,
      idFormation: 1,
      formateurs: [],
      dateDebut: '2024-02-01',
      dateFin: '2024-02-05',
    },
    {
      idSession: 3,
      idFormation: 2,
      formateurs: [],
      dateDebut: '2024-03-01',
      dateFin: '2024-03-07',
    },
    {
      idSession: 4,
      idFormation: 3,
      formateurs: [],
      dateDebut: '2024-01-15',
      dateFin: '2024-01-20',
    }
  ]
  constructor() { }
}
