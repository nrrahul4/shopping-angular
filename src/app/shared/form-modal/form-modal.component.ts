import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from '../../mock-data.service';
import { FormData } from './form-data.component';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  constructor(
    private router: Router,
    private mockDataService: MockDataService
  ) {}
  @ViewChild('modalClose', { static: true }) modalClose: ElementRef;
  recipe = new FormData('', '', '', '');
  showPopup = false;

  addRecipe(recipeForm: any) {
    this.mockDataService.addPurchase({ ...this.recipe });
    this.modalClose.nativeElement.click();
    recipeForm.resetForm();
    this.router.navigate(['./']);
  }
}
