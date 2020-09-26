import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';

export interface dataRes {
  id: number,
  advice: string
}

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor(private dataService_: DataService) { }

  data: dataRes = {
    id: 0,
    advice: ""
  };

  copied: string = '';
  show: boolean = false;

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.dataService_.getData().subscribe((res => {
      if (res) {
        this.data = res.slip;
      }
    }))
  }
  copyContent(advice) {
    this.copied = advice;
    this.show = true
    setTimeout(() => {
      this.show = false
    }, 2000);
  }
}
