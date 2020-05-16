import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from '../../mock-data.service';

interface Recipe {
  title: string;
  source: string;
  image: string;
  ingredients: string;
}
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private mockDataService: MockDataService
  ) {}

  edit = false;
  recipeId: string;
  recipeDetail = {} as Recipe;
  ingredientsList: Array<string> = [];

  recipeForm = new FormGroup({
    title: new FormControl(''),
    ingredients: new FormControl(''),
    image: new FormControl(''),
    source: new FormControl(''),
  });

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe((value) => {
      if (value) {
        this.edit = value.edit === 'true';
        this.recipeId = value.index;
      }
    });
    if (this.recipeId) {
      const tempData = [...this.mockDataService.getPurchase()];
      this.recipeDetail = tempData[this.recipeId];
      this.ingredientsList = this.recipeDetail.ingredients.split(',');
    }
  }
  sourceRecipe() {
    this.router.navigate(['/']);
  }
  editRecipe() {
    this.recipeForm.patchValue(this.recipeDetail);
    this.edit = true;
  }
  deleteRecipe() {
    const confirmation = confirm(
      'Are you sure you want to delete this purchase?'
    );
    if (confirmation) {
      this.mockDataService.removePurchase(this.recipeId);
      this.router.navigate(['/']);
    }
  }
  onSubmit() {
    this.mockDataService.updatePurchase(this.recipeId, this.recipeForm.value);
    this.router.navigate(['/']);
  }
}
