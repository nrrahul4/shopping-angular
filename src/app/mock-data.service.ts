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

  removePurchase(id) {
    const tempPurchase = this.purchaseList.filter((item, i) => {
      if (i !== parseFloat(id)) {
        return item;
      }
    });
    this.purchaseList = tempPurchase;
  }

  updatePurchase(id, detailList) {
    const tempVal = this.purchaseList.map((purchase, index) => {
      if (index === parseFloat(id)) {
        return { ...detailList };
      }
      return purchase;
    });
    this.purchaseList = [...tempVal];
  }

  setGridView(boolVal) {
    this.gridView = boolVal;
  }

  getGridView() {
    return this.gridView;
  }
}
