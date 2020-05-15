import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeHeaderComponent implements OnInit {
  constructor(private router: Router) {}
  edit = false;
  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe((value) => {
      if (value) {
        this.edit = value.edit === 'true';
      }
    });
  }
  editRecipe() {
    this.router.navigate(['/view-recipe'], { queryParams: { edit: true } });
  }
}
