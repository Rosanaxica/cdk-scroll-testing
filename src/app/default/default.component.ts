import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  public list: Array<any> = [];
  public list2: Array<any> = [];
  public totalSize = 200;

  constructor() {}

  ngOnInit(): void {
    this.list = '1'
      .repeat(100)
      .split('')
      .map((_, i) => i);
    console.log(this.list);
  }

  afterScroll() {
    this.list2 = '2'
      .repeat(100)
      .split('')
      .map((_, i) => i + 100);
    if (this.list.length < this.totalSize) {
      this.list = this.list.concat(this.list2);
    }
  }
}
