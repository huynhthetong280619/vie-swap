import { Button, Dropdown, Layout, Menu, Modal, Popover, Steps, notification } from "antd";
import React from "react";
import Logo from './assets/images/logo.png'
import Banner from './assets/images/banner.png'
import WorldMap from './assets/images/world-map.png'
import HoangAva from './assets/images/2.png'
import ThoaAva from './assets/images/3.png'
import ThaoAva from './assets/images/1.png'
import { DownOutlined, FacebookOutlined, TwitterOutlined, EuroCircleOutlined, SmileOutlined, SearchOutlined, FilterOutlined, BarChartOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";

const { Step } = Steps;

const MainIndex = () => {
  const history = useHistory();

  const handleChangeUrl = (path) => {
    history.push(path)
  }

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  const menu = (
    <Menu>
      {/* <Menu.Item key="0">
          <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  );


  return <Layout>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '0.5rem',
        marginLeft: '1rem',
        fontWeight: 500
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={Logo} height="50px" />
          <span style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>VieSwap</span>
        </div>
        <div style={{
          marginLeft: '2rem'
        }}>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Giao dịch <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div style={{
          marginLeft: '1rem',
          cursor: 'pointer'
        }} onClick={() => handleChangeUrl("market")}>Thị trường</div>
      </div>
      <div style={{
        display: 'flex',
        columnGap: '0.5rem',
        alignItems: 'center',
        marginRight: '1rem'
      }}>
        <div>
          <Button type="primary" onClick={() => {

            notification.warning({
              message: "Thông báo hệ thống",
              description: "Hiện tại tính năng này đang phát triển!",
              placement: "bottomRight"
            })

          }}>Đăng nhập</Button>
        </div>
        <div>
          <Button type="primary" onClick={() => {
            notification.warning({
              message: "Thông báo hệ thống",
              description: "Hiện tại tính năng này đang phát triển!",
              placement: "bottomRight"
            })
          }}>Đăng ký</Button>
        </div>
      </div>
    </div>
    <div className="banner-layout" style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem'
      }}>
        <div style={{
          fontSize: '3rem',
          fontStyle: 'bold'
        }}>VieSwap</div>
        <div>Giao dịch tài sản số an toàn, tiện lợi và nhanh chóng</div>
        <div>
          <Button type="primary" onClick={() => {
            notification.warning({
              message: "Thông báo hệ thống",
              description: "Hiện tại tính năng này đang phát triển!",
              placement: "bottomRight"
            })
          }}>Đăng ký ngay</Button>
        </div>
      </div>
      <div>
        <img src={Banner} />
      </div>
    </div>
    <div style={{
      margin: '2rem 0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '306px',
          height: '7px',
          background: '#d35400',
          borderRadius: '0.5rem',
          textAlign: 'center',
        }}></div>
      </div>
      <div>
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>SỨ MỆNH VIESWAP</div>
      </div>
      <div>
        <div style={{ padding: '0 10rem', margin: '1rem 0' }}>
          <Steps>
            <Step status="finish" icon={<SearchOutlined />} />
            <Step status="finish" icon={<FilterOutlined />} />
            <Step status="finish" icon={<BarChartOutlined />} />
            <Step status="finish" icon={<CheckCircleOutlined />} />
          </Steps>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <div style={{ width: '250px', textAlign: 'center' }}>
            Tạo một môi trường giao dịch uy tín, nhanh chóng, tiện lợi cho người dùng
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            Giúp người dùng thoải mái trong quá trình giao dịch với giao diện đơn giản
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            Về lâu dài, xây dựng VieSwap thành một sàn giao dịch tiền điện tử số 1 Việt Nam, giúp người dùng trải nghiệm những tính năng mới, đa dạng hơn thỏa mãn nhu cầu người dùng
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            Giải quyết những bất cập của người dùng một cách nhanh chóng, tiện lợi
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '306px',
            height: '7px',
            background: '#d35400',
            borderRadius: '0.5rem',
            textAlign: 'center',
          }}></div>
        </div>
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>NỀN TẢNG</div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '2rem 0'
      }}>
        <div>
          <div style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold' }}>VIE SMART CHAIN </div>
          <div style={{ fontSize: '1rem', verticalAlign: '0.5rem' }}>Hệ sinh thái/ Mạng lưới Vie Smart Chain ra đời nhằm:
          </div>
          <div>
            <ul style={{ fontSize: '1rem' }}>
              <li>Thúc đẩy sự phát triển của các dự án Việt Nam
              </li>
              <li>Xử lý các giao dịch một cách nhanh chóng.
              </li>
              <li>Dễ dàng truy xuất, thông tin giao dịch.
              </li>
              <li>Chế độ bảo mật hiện đại bằng công nghệ VSC
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={WorldMap} width="500px" height="250px" />
        </div>
      </div>
    </div>
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '306px',
          height: '7px',
          background: '#d35400',
          borderRadius: '0.5rem',
          textAlign: 'center',
        }}></div>
      </div>
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>LỘ TRÌNH</div>
      <div style={{
        margin: '2rem 0'
      }}>
        <Steps current={1} progressDot={customDot}>
          <Step />
          <Step title="Khởi tạo" description="Dự án hướng đến tăng trưởng lâu dài" subTitle="T9/2021" />
          <Step title="Xúc tiến" description="Phát Airdrop cho người dùng, đồng thời đẩy mạnh chiến dịch Marketing" subTitle="T1/2022" />
          <Step title="Đột phá" description="Xây dựng hệ sinh thái/mạng lưới Vie Smart Chain và Token VieSwap" subTitle="T7/2022" />
          <Step title="Mở rộng" description="Xem xét thăm dò mở rộng thị trường sang các nước Đông Nam Á" subTitle="T7/2023" />
          <Step title="Phát triển" description="Đổi mới, sáng tạo, cải tiển, phát triển" subTitle="2024" />
          <Step />
        </Steps>
      </div>
    </div>
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '306px',
          height: '7px',
          background: '#d35400',
          borderRadius: '0.5rem',
          textAlign: 'center',
        }}></div>
      </div>
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>THÀNH VIÊN DỰ ÁN</div>
      <div style={{
        display: 'flex',
        columnGap: '1rem',
        justifyContent: 'center',
        margin: '2rem 0'
      }}>
        <div style={{margin: '0 1rem'}}>
          <div>
            <img src={HoangAva} width="175px" height="250px" />
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <div style={{ fontWeight: 'bold' }}>Trần Minh Hoàng</div>
            <div>Quản trị dự án</div>
          </div>
        </div>

        <div style={{margin: '0 1rem'}}>
          <div>
            <img src={ThaoAva} width="175px" height="250px" />
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <div style={{ fontWeight: 'bold' }}>Phạm Thị Diệu Thảo</div>
            <div>Marketing</div>
          </div>
        </div>

        <div style={{margin: '0 1rem'}}>
          <div>
            <img src={ThoaAva} width="175px" height="250px" />
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <div style={{ fontWeight: 'bold' }}>Bùi Bảo Thoa</div>
            <div>Truyền thông</div>
          </div>
        </div>

      </div>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      // padding: '2rem 0',
      margin: '2rem 0'
    }}>
      <div>
        <div>Products</div>
        <div>Exchange</div>
      </div>
      <div>
        <div>About</div>
        <div>Về chúng tôi</div>
        <div>Liên hệ với chúng tôi</div>
      </div>
      <div>
        <div>Trung tâm hỗ trợ</div>
      </div>
      <div>
        <div>Join social media</div>
        <div style={{
          display: 'flex',
          columnGap: '0.75rem',
          marginTop: '0.25rem'
        }}>
          <FacebookOutlined style={{ cursor: 'pointer' }} />
          <TwitterOutlined style={{ cursor: 'pointer' }} />
          <EuroCircleOutlined style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
    <div className="tradingview-widget-container" style={{ heigth: '400px' }}>
      <div id="tradingview_7c144"></div>
    </div>
    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>©2021 VieSwap All Rights Reserved</div>
  </Layout>

}

export default MainIndex;
