import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Item {
  name: string;
  price: number;
  category: string;

  constructor(nameParam: string, priceParam: number, categoryParam: string) {
    this.name = nameParam;
    this.category = categoryParam;
    this.price = priceParam;
  }
}

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  items: Item[] | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.items = JSON.parse(idParam);
      console.log(this.items);
    }
  }
}
