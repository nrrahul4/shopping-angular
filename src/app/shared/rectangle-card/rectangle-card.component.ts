import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rectangle-card',
  templateUrl: './rectangle-card.component.html',
  styleUrls: ['./rectangle-card.component.scss'],
})
export class RectangleCardComponent {
  constructor(private router: Router) {}
  @Input() gridView;
  @Input() recipes = [];

  itemSelect(index) {
    this.router.navigate(['./view-recipe'], { queryParams: { edit: false, index } });
  }
}
