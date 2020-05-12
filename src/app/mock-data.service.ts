import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  purchaseList: object[] = [];
  gridView = false;

  addPurchase(item: object) {
    this.purchaseList.push(item);
  }

  getPurchase() {
    return this.purchaseList;
  }

  setGridView(boolVal) {
    this.gridView = boolVal;
  }

  getGridView() {
    return this.gridView;
  }
}
