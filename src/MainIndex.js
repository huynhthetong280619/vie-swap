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
              Giao d???ch <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div style={{
          marginLeft: '1rem',
          cursor: 'pointer'
        }} onClick={() => handleChangeUrl("market")}>Th??? tr?????ng</div>
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
              message: "Th??ng b??o h??? th???ng",
              description: "Hi???n t???i t??nh n??ng n??y ??ang ph??t tri???n!",
              placement: "bottomRight"
            })

          }}>????ng nh???p</Button>
        </div>
        <div>
          <Button type="primary" onClick={() => {
            notification.warning({
              message: "Th??ng b??o h??? th???ng",
              description: "Hi???n t???i t??nh n??ng n??y ??ang ph??t tri???n!",
              placement: "bottomRight"
            })
          }}>????ng k??</Button>
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
        <div>Giao d???ch t??i s???n s??? an to??n, ti???n l???i v?? nhanh ch??ng</div>
        <div>
          <Button type="primary" onClick={() => {
            notification.warning({
              message: "Th??ng b??o h??? th???ng",
              description: "Hi???n t???i t??nh n??ng n??y ??ang ph??t tri???n!",
              placement: "bottomRight"
            })
          }}>????ng k?? ngay</Button>
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
        }}>S??? M???NH VIESWAP</div>
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
            T???o m???t m??i tr?????ng giao d???ch uy t??n, nhanh ch??ng, ti???n l???i cho ng?????i d??ng
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            Gi??p ng?????i d??ng tho???i m??i trong qu?? tr??nh giao d???ch v???i giao di???n ????n gi???n
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            V??? l??u d??i, x??y d???ng VieSwap th??nh m???t s??n giao d???ch ti???n ??i???n t??? s??? 1 Vi???t Nam, gi??p ng?????i d??ng tr???i nghi???m nh???ng t??nh n??ng m???i, ??a d???ng h??n th???a m??n nhu c???u ng?????i d??ng
          </div>
          <div style={{ width: '250px', textAlign: 'center' }}>
            Gi???i quy???t nh???ng b???t c???p c???a ng?????i d??ng m???t c??ch nhanh ch??ng, ti???n l???i
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
        }}>N???N T???NG</div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '2rem 0'
      }}>
        <div>
          <div style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold' }}>VIE SMART CHAIN </div>
          <div style={{ fontSize: '1rem', verticalAlign: '0.5rem' }}>H??? sinh th??i/ M???ng l?????i Vie Smart Chain ra ?????i nh???m:
          </div>
          <div>
            <ul style={{ fontSize: '1rem' }}>
              <li>Th??c ?????y s??? ph??t tri???n c???a c??c d??? ??n Vi???t Nam
              </li>
              <li>X??? l?? c??c giao d???ch m???t c??ch nhanh ch??ng.
              </li>
              <li>D??? d??ng truy xu???t, th??ng tin giao d???ch.
              </li>
              <li>Ch??? ????? b???o m???t hi???n ?????i b???ng c??ng ngh??? VSC
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
      }}>L??? TR??NH</div>
      <div style={{
        margin: '2rem 0'
      }}>
        <Steps current={1} progressDot={customDot}>
          <Step />
          <Step title="Kh???i t???o" description="D??? ??n h?????ng ?????n t??ng tr?????ng l??u d??i" subTitle="T9/2021" />
          <Step title="X??c ti???n" description="Ph??t Airdrop cho ng?????i d??ng, ?????ng th???i ?????y m???nh chi???n d???ch Marketing" subTitle="T1/2022" />
          <Step title="?????t ph??" description="X??y d???ng h??? sinh th??i/m???ng l?????i Vie Smart Chain v?? Token VieSwap" subTitle="T7/2022" />
          <Step title="M??? r???ng" description="Xem x??t th??m d?? m??? r???ng th??? tr?????ng sang c??c n?????c ????ng Nam ??" subTitle="T7/2023" />
          <Step title="Ph??t tri???n" description="?????i m???i, s??ng t???o, c???i ti???n, ph??t tri???n" subTitle="2024" />
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
      }}>TH??NH VI??N D??? ??N</div>
      <div style={{
        display: 'flex',
        columnGap: '1rem',
        justifyContent: 'center',
        margin: '2rem 0'
      }}>
        <div style={{ margin: '0 1rem' }}>
          <div>
            <img src={HoangAva} width="175px" height="250px" />
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <div style={{ fontWeight: 'bold' }}>Tr???n Minh Ho??ng</div>
            <div>Qu???n tr??? d??? ??n</div>
          </div>
        </div>

        <div style={{ margin: '0 1rem' }}>
          <div>
            <img src={ThaoAva} width="175px" height="250px" />
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <div style={{ fontWeight: 'bold' }}>Ph???m Th??? Di???u Th???o</div>
            <div>Marketing</div>
          </div>
        </div>

        <div style={{ margin: '0 1rem' }}>
          <div>
            <img src={ThoaAva} width="175px" height="250px" />
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <div style={{ fontWeight: 'bold' }}>B??i B???o Thoa</div>
            <div>Truy???n th??ng</div>
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
        <div>V??? ch??ng t??i</div>
        <div>Li??n h??? v???i ch??ng t??i</div>
      </div>
      <div>
        <div>Trung t??m h??? tr???</div>
      </div>
      <div>
        <div>Join social media</div>
        <div style={{
          display: 'flex',
          columnGap: '0.75rem',
          marginTop: '0.25rem'
        }}>
          <a href="https://www.facebook.com/VieSwap.vn" target="_blank">
            <FacebookOutlined style={{ cursor: 'pointer' }} />
          </a>
          <a href="#">
            <TwitterOutlined style={{ cursor: 'pointer' }} />
          </a>
          <a href="#">
            <EuroCircleOutlined style={{ cursor: 'pointer' }} />
          </a>
        </div>
      </div>
    </div>
    <div className="tradingview-widget-container" style={{ heigth: '400px' }}>
      <div id="tradingview_7c144"></div>
    </div>
    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>??2021 VieSwap All Rights Reserved</div>
  </Layout>

}

export default MainIndex;
