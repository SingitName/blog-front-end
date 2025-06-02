import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { Input,Avatar, Dropdown, Image } from 'antd'; 
import { BellOutlined,ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import { useViewPort } from 'util/useViewPort';
import { on } from 'events';
const Header: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { isMobile } = useViewPort();
  const items = [
    {
      key:"1",
      label: "Setting",
    },
    {
      key:"2",
      label: "Profile",
    },
    {
      key:"3",
      label: "Logout",
      onClick: () => {
        router.push('/login');
      }
    }
  ];
  const menuItem = {items};
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  return (
    <header className="p-header">
      <div className="p-header__container">
        <div className="p-header__container__logo">
          <span>T Man</span>
          {/* <Image className='logo' src='../image/logo.png' preview={false}></Image> */}
          <Search className='custom-search' placeholder='Tìm kiếm' loading={loading} onSearch={handleLoading}></Search>
        </div>
 
            <div className='p-header__container__custom'>
              <ul>
                {isMobile ? (
                 <li> 
                  <Dropdown overlayClassName='dropdown-menu' menu={menuItem} trigger={['click']} placement="bottomRight">
                    <Avatar
                      size={32}
                      icon={<UserOutlined />}
                      src={'../image/home/banner.webp'}
                      style={{ cursor: 'pointer', marginLeft:25 }}
                    />
                  </Dropdown>
                </li>
                ):(
                   <>
                <li><BellOutlined /></li>
                <li><ShoppingCartOutlined /></li>
                <li> 
                  <Dropdown overlayClassName='dropdown-menu' menu={menuItem} trigger={['click']} placement="bottomRight">
                    <Avatar
                      size={32}
                      icon={<UserOutlined />}
                      src={'../image/home/banner.webp'}
                      style={{ cursor: 'pointer', marginLeft:25 }}
                    />
                  </Dropdown>
                </li>
                </>                  
                )}
              </ul>             
            </div>
      </div>
    </header>
  );
};

export default Header;