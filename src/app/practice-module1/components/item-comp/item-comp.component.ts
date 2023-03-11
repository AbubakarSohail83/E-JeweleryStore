import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-comp',
  templateUrl: './item-comp.component.html',
  styleUrls: ['./item-comp.component.css']
})
export class ItemCompComponent implements OnInit {
  @Input() item: string="";

  constructor() { }

  ngOnInit(): void {
  }

}