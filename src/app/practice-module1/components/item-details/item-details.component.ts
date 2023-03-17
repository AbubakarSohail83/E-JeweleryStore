import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  items: Array<Item> | null = null;
 
  
  constructor(private activatedRoute: ActivatedRoute, public sharedS:SharedService, public http:HttpServiceService) {}

  ngOnInit() {


   

    const idParam = this.activatedRoute.snapshot.paramMap.get('items');

    if (idParam !== null) {
      this.items = JSON.parse(idParam);
      console.log(this.items);
    }
  }
 
}
