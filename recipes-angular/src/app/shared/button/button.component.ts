import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() action!: () => void;

  execute() {
    if (this.action) {
      this.action();
    }
  }
}
