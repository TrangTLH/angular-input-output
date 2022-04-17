import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  categories = [
    {name: 'Hàng mới về'},
    {name: 'Hàng bán chạy'},
    {name: 'Hàng giảm giá'}
  ]
}
