import { AiOutlineStock, AiOutlineUser } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineCash, HiOutlineClipboardList } from 'react-icons/hi';
import { MdOutlineCelebration, MdOutlineLogout } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsBell } from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';
import { BiDoughnutChart } from 'react-icons/bi';
export const dataDrawerPart1 = [
  {
    icon: <BiDoughnutChart style={{ fontSize: '24px', color: 'rgba(0, 101, 238,1)' }} />,
    text: 'Trang chủ',
    path: ''
  },
  {
    icon: <HiOutlineClipboardList style={{ fontSize: '24px', color: 'rgba(0, 101, 238,1)' }} />,
    text: 'Đơn hàng',
    path: 'orders'
  },
  {
    icon: <FiHome style={{ fontSize: '24px', color: 'rgba(254, 52, 100,1)' }} />,
    text: 'Kho hàng',
    path: 'products'
  },
  {
    icon: <RiUserFollowLine style={{ fontSize: '24px', color: 'rgba(13, 193, 210, 1)' }} />,
    text: 'Nhân viên',
    path: 'assistant'
  },
  {
    icon: <BsPeople style={{ fontSize: '24px', color: 'rgba(27, 203, 161,1)' }} />,
    text: 'Khách hàng',
    path: 'customer'
  },
  {
    icon: <MdOutlineCelebration style={{ fontSize: '24px', color: 'rgba(254, 52, 100,1)' }} />,
    text: 'Sự kiện',
    path: 'event'
  },
  {
    icon: <HiOutlineCash style={{ fontSize: '24px', color: 'rgba(13, 193, 210, 1)' }} />,
    text: 'Doanh số',
    path: 'business'
  },
  {
    icon: <AiOutlineStock style={{ fontSize: '24px', color: 'rgba(0, 101, 238, 1)' }} />,
    text: 'Thống kê',
    path: 'statistical'
  }
];

export const dataDrawerPart2 = [
  {
    icon: <AiOutlineUser style={{ fontSize: '24px', color: '#9CA3AF' }} />,
    text: 'Tài khoản',
    path: 'account'
  },
  {
    icon: <BsBell style={{ fontSize: '24px', color: '#9CA3AF' }} />,
    text: 'Thông báo',
    path: 'notification'
  },
  {
    icon: <FaRegHandshake style={{ fontSize: '24px', color: '#9CA3AF' }} />,
    text: 'Hợp tác kinh doanh',
    path: 'cooperation'
  },
  {
    icon: <MdOutlineLogout style={{ fontSize: '24px', color: '#9CA3AF' }} />,
    text: 'Đăng xuất',
    path: 'logout'
  }
];
