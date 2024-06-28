import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private apiService: ApiService) {
    // this.CreateData();
    // this.ReadData();
    // this.UpdateData();
    // this.DeleteData();
  }

  CreateData() {
    const data: any = {
      title: 'Tempest',
      body: 'Test',
      userId: 10,
    };

    this.apiService.CreateData(data).subscribe((data) => {
      console.log(data);
    });
  }

  ReadData() {
    this.apiService.ReadData().subscribe((data) => {
      console.log(data);
    });
  }

  UpdateData() {
    const data: any = {
      id: 1,
      title: 'Contra III',
      body: 'Games',
      userId: 10,
    };

    this.apiService.UpdateData(data).subscribe((data) => {
      console.log(data);
    });
  }

  DeleteData() {
    this.apiService.DeleteData().subscribe((data) => {
      console.log(data);
    });
  }
}
