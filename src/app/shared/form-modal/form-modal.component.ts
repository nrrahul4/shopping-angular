import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MockDataService } from '../../mock-data.service';

interface RecipeFormat {
  name: string;
  ingredients: string;
  image: string;
  source: string;
}

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  constructor(private router: Router, private mockDataService: MockDataService) {}
  recipe = {} as RecipeFormat;

  inputChange(event) {
    const { name, value } = event.target;
    this.recipe[name] = value;
  }

  addRecipe() {
    this.mockDataService.addPurchase({ ...this.recipe });
    (document.getElementById('ingredients') as HTMLInputElement).value = '';
    (document.getElementById('title') as HTMLInputElement).value = '';
    (document.getElementById('source') as HTMLInputElement).value = '';
    (document.getElementById('image') as HTMLInputElement).value = '';
    this.router.navigate(['./']);
  }
}
