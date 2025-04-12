
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../../../models/professor.model';
import { ProfessorService } from '../../../services/professor.service';
import { CardComponent } from '../../../components/ui/card/card.component';
import { ButtonComponent } from '../../../components/ui/button/button.component';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">{{ isEditing ? 'Edit' : 'Add' }} Professor</h1>
      <p class="text-gray-500">{{ isEditing ? 'Update' : 'Create new' }} professor information</p>
    </div>

    <app-card>
      <form (ngSubmit)="onSubmit()" #professorForm="ngForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="professor.name"
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
              [(ngModel)]="professor.email"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="employeeId" class="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              [(ngModel)]="professor.employeeId"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="department" class="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select
              id="department"
              name="department"
              [(ngModel)]="professor.department"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Business">Business</option>
              <option value="Engineering">Engineering</option>
              <option value="Psychology">Psychology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="Chemistry">Chemistry</option>
            </select>
          </div>
          
          <div>
            <label for="position" class="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <select
              id="position"
              name="position"
              [(ngModel)]="professor.position"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            >
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Full Professor">Full Professor</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Adjunct Professor">Adjunct Professor</option>
            </select>
          </div>
          
          <div>
            <label for="hireDate" class="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
            <input
              type="date"
              id="hireDate"
              name="hireDate"
              [(ngModel)]="professor.hireDate"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          
          <div>
            <label for="specialization" class="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              [(ngModel)]="professor.specialization"
              required
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
        </div>
        
        <div class="flex justify-end space-x-3">
          <a routerLink="/professors">
            <app-button variant="secondary">Cancel</app-button>
          </a>
          <app-button type="submit" [disabled]="professorForm.invalid">
            {{ isEditing ? 'Update' : 'Save' }} Professor
          </app-button>
        </div>
      </form>
    </app-card>
  `,
})
export class ProfessorFormComponent implements OnInit {
  professor: Professor = {
    id: 0,
    name: '',
    email: '',
    employeeId: '',
    department: '',
    position: '',
    hireDate: '',
    specialization: '',
  };
  
  isEditing = false;

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.professorService.getProfessor(+id).subscribe(professor => {
        if (professor) {
          this.professor = professor;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.professorService.updateProfessor(this.professor).subscribe(() => {
        this.router.navigate(['/professors']);
      });
    } else {
      this.professorService.addProfessor(this.professor).subscribe(() => {
        this.router.navigate(['/professors']);
      });
    }
  }
}
