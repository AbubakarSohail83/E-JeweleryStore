import { Component } from '@angular/core';

@Component({
  selector: 'app-show-list-of-items',
  templateUrl: './show-list-of-items.component.html',
  styleUrls: ['./show-list-of-items.component.css']
})
export class ShowListOfItemsComponent {
  items=["abc","def","ghi","jkl","mno"];
}
