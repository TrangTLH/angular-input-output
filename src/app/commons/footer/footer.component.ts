import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  titleInfo = 'LIÊN HỆ'

  storeName = 'Cửa hàng điện máy Nhuận Thanh'

  address = 'Số nhà 377, đường Lê Lợi, Thị trấn Thường Xuân, Thường Xuân, Thanh Hoá'

  phones = [
    'Số điện thoại cửa hàng: 0373 873 094',
    'Mr Nhuận: 0919 564 312 - 0129 308 79 79',
    'Mrs Thanh: 0916 001 056'
  ]

  email = 'nhuanthanhtx@gmail.com'

  titleGuide = 'HỖ TRỢ KHÁCH HÀNG'

  guides = [
    'Hướng dẫn mua hàng',
    'Hướng dẫn thanh toán',
    'Hướng dẫn giao nhận',
    'Điều khoản dịch vụ'
  ]

  titlePolicy = 'CHÍNH SÁCH & QUY ĐỊNH'

  policies = [
    'Chính sách bảo mật',
    'Chính sách vận chuyển',
    'Chính sách đổi trả',
    'Quy định sử dụng'
  ]
}
