import { Component } from '@angular/core';

@Component({
  selector: 'app-show-list-of-items',
  templateUrl: './show-list-of-items.component.html',
  styleUrls: ['./show-list-of-items.component.css']
})
export class ShowListOfItemsComponent {
  items=["abc","def","ghi"];
  itemPics=["assets/pictures/download (1).jpeg","assets/pictures/download (2).jpeg","assets/pictures/download.jpeg"];
  title:string;
 
  onNotified(message:string)
  {
    this.title=message;
  }
}
