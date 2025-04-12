
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-6">Page not found</p>
      <a routerLink="/dashboard" class="text-blue-600 hover:text-blue-800 font-medium">Return to Dashboard</a>
    </div>
  `,
})
export class NotFoundComponent {}
