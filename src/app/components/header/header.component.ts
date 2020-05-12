import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private mockDataService: MockDataService) {}
  data = [];
  gridView = true;
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data = this.mockDataService.getPurchase();
  }

  squareBtnClick() {
    this.gridView = !this.gridView;
    this.mockDataService.setGridView(!this.gridView);
  }
}
