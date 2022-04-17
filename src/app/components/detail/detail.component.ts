import {Component} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  titleInfo: string = 'Thông tin sản phẩm'

  titleLocal: string = 'Mua hàng trực tiếp tại cửa hàng'

  address: string = 'Số nhà 377, đường Lê Lợi, Thị trấn Thường Xuân, Thường Xuân, Thanh Hoá'

  titleRefund = 'Giao hàng và đổi trả'

  refundInfo = [
    'Đổi trả hàng tùy thuộc sản phẩm',
    'Phí vận chuyển tùy thuộc vào địa điểm',
    'Thanh toán khi nhận hàng'
  ]

  product = {
    name: 'Vợt bắt muỗi điện tử',
    code: 'Mã sản phẩm: VBM-RD1',
    image: 'assets/images/vot_bat_muoi_3.jpg',
    price: 'Giá bán lẻ đề xuất: 169.400 VNĐ',
    features: [
      {
        feature: 'Điện áp nguồn sạc: ',
        measure: '100 - 250 V'
      },
      {
        feature: 'Điện áp đầu ra: ',
        measure: '≥2.0 kV'
      },
      {
        feature: 'Công suất: ',
        measure: '3.5 W'
      },
      {
        feature: 'Thời gian sạc đầy pin: ',
        measure: '(4-6)h'
      },
      {
        feature: 'Cấp bảo vệ:',
        measure: 'IP20'
      }
    ],
    descriptions: [
      'Có đèn chiếu sáng Led tích hợp và đèn báo sạc pin tiện lợi cho người sử dụng',
      'Sử dụng pin sạc Lithium an toàn với môi trường, tuổi thọ cao, nạp xả được nhiều lần',
      'Vợt bắt muỗi sử dụng để diệt côn trùng như: muỗi, các loại côn trùng bay kích thước tương đương muỗi,...'
    ]
  }

  button: string = 'Mua ngay'
}
