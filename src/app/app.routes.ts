
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  },
  { 
    path: 'students', 
    loadComponent: () => import('./pages/students/student-list/student-list.component').then(m => m.StudentListComponent) 
  },
  { 
    path: 'students/add', 
    loadComponent: () => import('./pages/students/student-form/student-form.component').then(m => m.StudentFormComponent) 
  },
  { 
    path: 'students/edit/:id', 
    loadComponent: () => import('./pages/students/student-form/student-form.component').then(m => m.StudentFormComponent) 
  },
  { 
    path: 'professors', 
    loadComponent: () => import('./pages/professors/professor-list/professor-list.component').then(m => m.ProfessorListComponent) 
  },
  { 
    path: 'professors/add', 
    loadComponent: () => import('./pages/professors/professor-form/professor-form.component').then(m => m.ProfessorFormComponent) 
  },
  { 
    path: 'professors/edit/:id', 
    loadComponent: () => import('./pages/professors/professor-form/professor-form.component').then(m => m.ProfessorFormComponent) 
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
