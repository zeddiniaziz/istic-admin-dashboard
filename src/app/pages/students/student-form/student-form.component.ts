
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';
import { CardComponent } from '../../../components/ui/card/card.component';
import { ButtonComponent } from '../../../components/ui/button/button.component';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">{{ isEditing ? 'Edit' : 'Add' }} Student</h1>
      <p class="text-gray-500">{{ isEditing ? 'Update' : 'Create new' }} student information</p>
    </div>

    <app-card>
      <form (ngSubmit)="onSubmit()" #studentForm="ngForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="student.name"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="student.email"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="studentId" class="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              [(ngModel)]="student.studentId"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="dateOfBirth" class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              [(ngModel)]="student.dateOfBirth"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="major" class="block text-sm font-medium text-gray-700 mb-1">Major</label>
            <input
              type="text"
              id="major"
              name="major"
              [(ngModel)]="student.major"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="year" class="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <select
              id="year"
              name="year"
              [(ngModel)]="student.year"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            >
              <option [ngValue]="1">1</option>
              <option [ngValue]="2">2</option>
              <option [ngValue]="3">3</option>
              <option [ngValue]="4">4</option>
            </select>
          </div>
          
          <div>
            <label for="gpa" class="block text-sm font-medium text-gray-700 mb-1">GPA</label>
            <input
              type="number"
              id="gpa"
              name="gpa"
              [(ngModel)]="student.gpa"
              required
              min="0"
              max="4"
              step="0.1"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
        </div>
        
        <div class="flex justify-end space-x-3">
          <a routerLink="/students">
            <app-button variant="secondary">Cancel</app-button>
          </a>
          <app-button type="submit" [disabled]="studentForm.invalid">
            {{ isEditing ? 'Update' : 'Save' }} Student
          </app-button>
        </div>
      </form>
    </app-card>
  `,
})
export class StudentFormComponent implements OnInit {
  student: Student = {
    id: 0,
    name: '',
    email: '',
    studentId: '',
    dateOfBirth: '',
    major: '',
    year: 1,
    gpa: 0,
  };
  
  isEditing = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.studentService.getStudent(+id).subscribe(student => {
        if (student) {
          this.student = student;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }
}
