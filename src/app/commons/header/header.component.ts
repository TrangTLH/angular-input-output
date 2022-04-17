import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  homePage: string = '/home'

  storeName: string = 'Cửa hàng Nhuận Thanh'

  navs = [
    'Giới thiệu',
    'Liên hệ',
    'Đăng ký',
    'Đăng nhập'
  ]
}
