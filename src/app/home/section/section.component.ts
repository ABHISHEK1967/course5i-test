import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { map } from 'rxjs/operators';

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

    this._globalService.getData().pipe(
      map((data: any) => {
        data.forEach((x) => {
          x['off'] = x['off'] == null ? x['off'] = '-' : x['off'];
          x['cost_concession'] = x['cost_concession'] == null ? x['cost_concession'] = '-' : x['cost_concession'];
          x['special_cost'] = x['special_cost'] == null ? x['special_cost'] = '-' : x['special_cost'];
          x['net_cost'] = x['net_cost'] == null ? x['net_cost'] = '-' : x['net_cost'];
        })

        return data;
      })
    ).subscribe((data) => {
      console.log(data);
      this.rows = data;
    })
  }


}
