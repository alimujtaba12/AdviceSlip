import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { dataRes } from 'src/Model/AdviceRes';

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
  mode: boolean = false;
  viewLoader: boolean = false;

  ngOnInit() {
    this.reload();
    let modeValue = JSON.parse(this.dataService_.getMode());
    if (modeValue == true) {
      this.mode = true;
    } else {
      this.mode = false;
    }
  }

  reload() {
    this.viewLoader = true
    this.dataService_.getData().subscribe((res => {
      if (res) {
        this.data = res.slip;
        this.viewLoader = false;
      }
    }))
  }

  changeMode() {
    this.mode = !this.mode;
    localStorage.setItem('mode', JSON.stringify(this.mode))
  }

  copyContent(advice) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (advice));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.copied = advice;
    this.show = true
    setTimeout(() => {
      this.show = false
    }, 2000);
  }

  tweet() {
    alert('Soon it would be available!!!')
  }

}
