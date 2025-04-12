
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white shadow-sm rounded-lg overflow-hidden">
      <div *ngIf="title" class="border-b px-4 py-3">
        <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
      </div>
      <div class="p-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  imports: []
})
export class CardComponent {
  @Input() title?: string;
}
