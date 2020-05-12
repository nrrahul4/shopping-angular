import { Component, OnInit, DoCheck } from '@angular/core';
import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, DoCheck {
  constructor(private mockDataService: MockDataService) {}
  gridValue = false;
  purchaseList = [];
  ngOnInit() {
    this.gridValue = this.mockDataService.getGridView();
  }
  ngDoCheck() {
    if (this.mockDataService.getGridView() !== this.gridValue) {
      this.gridValue = this.mockDataService.getGridView();
    }
    if (
      this.mockDataService.getPurchase().length !== this.purchaseList.length
    ) {
      this.purchaseList = this.mockDataService.getPurchase();
    }
  }
}
