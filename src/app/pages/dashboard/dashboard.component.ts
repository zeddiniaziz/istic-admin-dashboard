
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ProfessorService } from '../../services/professor.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  template: `
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-500">University Administration System</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Total Students</div>
            <div class="text-xl font-semibold">{{ studentCount }}</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Total Professors</div>
            <div class="text-xl font-semibold">{{ professorCount }}</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-purple-100 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-purple-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Departments</div>
            <div class="text-xl font-semibold">4</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Average GPA</div>
            <div class="text-xl font-semibold">3.7</div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <app-card title="Recent Students">
        <div class="divide-y">
          <div *ngFor="let student of recentStudents" class="py-3">
            <div class="flex justify-between items-center">
              <div>
                <div class="font-medium">{{ student.name }}</div>
                <div class="text-sm text-gray-500">{{ student.major }}</div>
              </div>
              <div class="text-sm text-gray-500">ID: {{ student.studentId }}</div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <a routerLink="/students" class="text-blue-600 hover:text-blue-800 text-sm font-medium">View all students →</a>
        </div>
      </app-card>

      <app-card title="Recent Professors">
        <div class="divide-y">
          <div *ngFor="let professor of recentProfessors" class="py-3">
            <div class="flex justify-between items-center">
              <div>
                <div class="font-medium">{{ professor.name }}</div>
                <div class="text-sm text-gray-500">{{ professor.department }}</div>
              </div>
              <div class="text-sm text-gray-500">{{ professor.position }}</div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <a routerLink="/professors" class="text-blue-600 hover:text-blue-800 text-sm font-medium">View all professors →</a>
        </div>
      </app-card>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  studentCount = 0;
  professorCount = 0;
  recentStudents: any[] = [];
  recentProfessors: any[] = [];

  constructor(
    private studentService: StudentService,
    private professorService: ProfessorService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.studentCount = students.length;
      this.recentStudents = students.slice(0, 3);
    });

    this.professorService.getProfessors().subscribe(professors => {
      this.professorCount = professors.length;
      this.recentProfessors = professors.slice(0, 3);
    });
  }
}
