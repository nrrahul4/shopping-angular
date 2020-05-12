import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle-card',
  templateUrl: './rectangle-card.component.html',
  styleUrls: ['./rectangle-card.component.scss'],
})
export class RectangleCardComponent {
  @Input() gridView;
  @Input() recipes = [];
}
