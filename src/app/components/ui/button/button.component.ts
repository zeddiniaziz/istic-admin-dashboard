
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button 
      [type]="type" 
      [disabled]="disabled"
      (click)="handleClick()"
      class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm"
      [ngClass]="getClasses()"
    >
      <ng-content></ng-content>
    </button>
  `,
  imports: []
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'ghost' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }

  getClasses(): Record<string, boolean> {
    const classes: Record<string, boolean> = {
      'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500': this.variant === 'primary',
      'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500': this.variant === 'secondary',
      'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500': this.variant === 'danger',
      'bg-transparent text-gray-700 hover:bg-gray-50 hover:text-gray-900': this.variant === 'ghost',
      'opacity-50 cursor-not-allowed': this.disabled
    };
    return classes;
  }
}
