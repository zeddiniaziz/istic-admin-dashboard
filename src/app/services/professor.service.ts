
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Professor } from '../models/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private professors: Professor[] = [
    {
      id: 1,
      name: 'Dr. Robert Brown',
      email: 'robert.brown@university.edu',
      employeeId: 'P2001',
      department: 'Computer Science',
      position: 'Associate Professor',
      hireDate: '2015-09-01',
      specialization: 'Artificial Intelligence'
    },
    {
      id: 2,
      name: 'Dr. Elizabeth Taylor',
      email: 'elizabeth.t@university.edu',
      employeeId: 'P2002',
      department: 'Business',
      position: 'Full Professor',
      hireDate: '2010-08-15',
      specialization: 'Corporate Finance'
    },
    {
      id: 3,
      name: 'Dr. William Davis',
      email: 'william.d@university.edu',
      employeeId: 'P2003',
      department: 'Engineering',
      position: 'Assistant Professor',
      hireDate: '2018-01-10',
      specialization: 'Mechanical Systems'
    },
    {
      id: 4,
      name: 'Dr. Mary Johnson',
      email: 'mary.j@university.edu',
      employeeId: 'P2004',
      department: 'Psychology',
      position: 'Associate Professor',
      hireDate: '2014-07-22',
      specialization: 'Clinical Psychology'
    }
  ];

  private nextId = 5;

  getProfessors(): Observable<Professor[]> {
    return of(this.professors);
  }

  getProfessor(id: number): Observable<Professor | undefined> {
    const professor = this.professors.find(p => p.id === id);
    return of(professor);
  }

  addProfessor(professor: Omit<Professor, 'id'>): Observable<Professor> {
    const newProfessor = { ...professor, id: this.nextId++ };
    this.professors.push(newProfessor);
    return of(newProfessor);
  }

  updateProfessor(professor: Professor): Observable<Professor> {
    const index = this.professors.findIndex(p => p.id === professor.id);
    if (index !== -1) {
      this.professors[index] = professor;
    }
    return of(professor);
  }

  deleteProfessor(id: number): Observable<boolean> {
    const initialLength = this.professors.length;
    this.professors = this.professors.filter(p => p.id !== id);
    return of(this.professors.length !== initialLength);
  }
}
