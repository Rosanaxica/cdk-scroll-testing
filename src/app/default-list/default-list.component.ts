import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.scss'],
})
export class DefaultListComponent implements OnInit {
  @Input() list: Array<any> = [];
  @Input() listSize: number = 0;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewPort: CdkVirtualScrollViewport;
  changeLog: Array<any> = [];
  @Output() scrolled = new EventEmitter();
  @Input() newList: Array<any> = [];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.list);
  }


  getNewData() {
    const end = this.viewPort.getRenderedRange().end;
    const total = this.viewPort.getDataLength();
    console.log(`end is ${end} total is ${total}`);
    if (end == total) {
     this.scrolled.emit();

    }
  }



  trackByIdx(i: number) {
    return i;
  }
}
