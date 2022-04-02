import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Routing} from "@enums/routing.enum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() productName: string = ''
  @Input() productCode: string = ''

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToDetail() {
    this.router.navigate([`/${Routing.Detail}`])
  }
}
