import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  cols: any;
  rows: any
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.cols = [
      { field: "list_price", header: "List Price", width: '12%' },
      { field: "dollars_off", header: "Dollars off", width: '12%' },
      { field: "net_price", header: "Net Price", width: '12%' },
      { field: "off", header: "% off", width: '8%' },
      { field: "harmony_cost", header: "Harmony Cost", width: '15%' },
      { field: "cost_concession", header: "Cost Concessions", width: '18%' },
      { field: "special_cost", header: "Special Cost", width: '16%' },
      { field: "net_cost", header: "Net Cost", width: '12%' },
      { field: "comments", header: "Comments/Notes", width: '20%' }
    ]

    this._globalService.getData()
      .subscribe((data) => {
        this.rows = data;
      })
  }


}
