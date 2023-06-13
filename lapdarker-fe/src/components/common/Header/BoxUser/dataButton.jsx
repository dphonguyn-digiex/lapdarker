import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSafety } from 'react-icons/ai';
import { HiOutlineLocationMarker, HiOutlineClipboardList } from 'react-icons/hi';
import { FiSearch, FiMap, FiPhoneCall } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { RiTruckLine } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';

export const dataButton = [
  {
    icon: <AiOutlineUser style={{ fontSize: '24px', color: 'rgba(13, 193, 210, 1)' }} />,
    text: 'Thông tin tài khoản',
    path: 'user/account'
  },
  {
    icon: <AiOutlineShoppingCart style={{ fontSize: '24px', color: 'rgba(0, 101, 238,1)' }} />,
    text: 'Thông tin liên lạc & Sổ địa chỉ',
    path: 'user/contact'
  },
  {
    icon: <AiOutlineSafety style={{ fontSize: '24px', color: 'rgba(0, 101, 238,1)' }} />,
    text: 'Lịch sử mua hàng',
    path: 'user/management-orders'
  },
  {
    icon: <HiOutlineLocationMarker style={{ fontSize: '24px', color: '#0e0e0e' }} />,
    text: 'Tra cứu bảo hành',
    path: 'user/search-insurance'
  },
  {
    icon: <HiOutlineClipboardList style={{ fontSize: '24px', color: 'rgba(0, 101, 238,1)' }} />,
    text: 'Đã lưu / đã xem',
    path: 'user/saving'
  },
  {
    icon: <FiSearch style={{ fontSize: '24px', color: 'rgba(57, 184, 238,1)' }} />,
    text: 'Hệ thống cửa hàng',
    path: 'user/stores'
  },
  {
    icon: <FiMap style={{ fontSize: '24px', color: 'rgba(27, 203, 161,1)' }} />,
    text: 'Bảo hành đổi trả',
    path: 'user/policy/insurance'
  },
  {
    icon: <FiPhoneCall style={{ fontSize: '24px', color: 'rgba(254, 52, 100,1)' }} />,
    text: 'Vận chuyển, thanh toán',
    path: 'user/policy/deliver'
  },
  {
    icon: <BsBookmark style={{ fontSize: '24px', color: 'rgba(57, 91, 238,1)' }} />,
    text: 'Bảng giá dịch vụ',
    path: 'user/policy/service-cost'
  },
  {
    icon: <RiTruckLine style={{ fontSize: '24px', color: 'rgba(254, 52, 100,1)' }} />,
    text: 'Gọi hotline 0947.443.064',
    path: 'hotCall'
  },
  {
    icon: <MdOutlineLogout style={{ fontSize: '24px', color: 'rgba(254, 52, 100,1)' }} />,
    text: 'Đăng xuất',
    path: 'user/logout'
  }
];
