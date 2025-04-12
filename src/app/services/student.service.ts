
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john.doe@university.edu', 
      studentId: 'S1001', 
      dateOfBirth: '1999-05-15', 
      major: 'Computer Science', 
      year: 3, 
      gpa: 3.7 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane.smith@university.edu', 
      studentId: 'S1002', 
      dateOfBirth: '2000-08-22', 
      major: 'Business Administration', 
      year: 2, 
      gpa: 3.9 
    },
    { 
      id: 3, 
      name: 'Michael Johnson', 
      email: 'michael.j@university.edu', 
      studentId: 'S1003', 
      dateOfBirth: '1998-11-30', 
      major: 'Engineering', 
      year: 4, 
      gpa: 3.5 
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@university.edu',
      studentId: 'S1004',
      dateOfBirth: '1999-03-12',
      major: 'Psychology',
      year: 3,
      gpa: 3.8
    }
  ];

  private nextId = 5;

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudent(id: number): Observable<Student | undefined> {
    const student = this.students.find(s => s.id === id);
    return of(student);
  }

  addStudent(student: Omit<Student, 'id'>): Observable<Student> {
    const newStudent = { ...student, id: this.nextId++ };
    this.students.push(newStudent);
    return of(newStudent);
  }

  updateStudent(student: Student): Observable<Student> {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
    return of(student);
  }

  deleteStudent(id: number): Observable<boolean> {
    const initialLength = this.students.length;
    this.students = this.students.filter(s => s.id !== id);
    return of(this.students.length !== initialLength);
  }
}
