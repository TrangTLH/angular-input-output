import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Routing} from "@enums/routing.enum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() productName: string = ''
  @Input() productCode: string = ''
  @Input() productImage: string = ''

  constructor(
    private router: Router
  ) {
  }

  goToDetail() {
    this.router.navigate([`/${Routing.Detail}`])
  }
}
