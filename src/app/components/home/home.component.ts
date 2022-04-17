import {Component, OnInit} from '@angular/core';

interface Product {
  name: string,
  code: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = 'Danh sách sản phẩm'
  name: string = 'Vợt bắt muỗi điện tử'

  products: Product[] = [
    {
      name: this.name,
      code: 'VBM-RD1',
      image: 'assets/images/vot_bat_muoi_3.jpg'
    },
    {
      name: this.name,
      code: 'VBM-RD2',
      image: 'assets/images/vot_bat_muoi_3.jpg'
    },
    {
      name: this.name,
      code: 'VBM-RD3',
      image: 'assets/images/vot_bat_muoi_3.jpg'
    },
    {
      name: this.name,
      code: 'VBM-RD4',
      image: 'assets/images/VBM.02.jpg'
    },
    {
      name: this.name,
      code: 'VBM-RD5',
      image: 'assets/images/VBM.02.jpg'
    },
    {
      name: this.name,
      code: 'VBM-RD6',
      image: 'assets/images/VBM.02.jpg'
    }
  ]
}
