import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-comp',
  templateUrl: './item-comp.component.html',
  styleUrls: ['./item-comp.component.css']
})
export class ItemCompComponent implements OnInit {
  @Input() item: string;
  @Input() itemPic: string;
  @Output() notify: EventEmitter<string> =new EventEmitter<string>();        //event emitter object

  constructor() { }

  ngOnInit(): void {
  }

  onClicked()      //whenever an item is pressed this functionwill be invoked
  {
    this.notify.emit(this.item);
  }
}