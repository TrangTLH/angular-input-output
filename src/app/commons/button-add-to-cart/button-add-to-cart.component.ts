import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-add-to-cart',
  templateUrl: './button-add-to-cart.component.html',
  styleUrls: ['./button-add-to-card.component.scss']
})
export class ButtonAddToCartComponent {

  @Input() title: string = 'Thêm vào giỏ hàng';

  @Output() titleChange = new EventEmitter<string>();
  // string để tránh trường hợp nhập vào emit k phải là string mà là 1 cái khác làm lỗi

  addToCart() {
    this.title = 'Đã thêm vào giỏ hàng';
    this.titleChange.emit(this.title);
  }
}
