import React from 'react';
import { TabBar } from 'antd-mobile';
import './App.css';
import { createHashHistory, createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import QRCode from './QRCode';
import New from './New';
import My from './My';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }

  render() {
    const history = createHashHistory();// 使用createBrowserHistory().push('/Xxx')必填此句
    // createBrowserHistory().push('/Welcome')// 开局默认加载主页(手机App不识别默认路由方式)
    return (
      <div>
        <BrowserRouter>
          <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="主页"
                key="Life"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                  createBrowserHistory().push('/Welcome')
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                  }}
                  />
                }
                title="乘车码"
                key="Koubei"
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  createBrowserHistory().push('/QRCode')
                  this.setState({
                    selectedTab: 'redTab',
                  });
                }}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                  }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                  }}
                  />
                }
                title="发现"
                key="Friend"
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  createBrowserHistory().push('/New')
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="my"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  createBrowserHistory().push('/My')
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                }}
              >
              </TabBar.Item>
            </TabBar>
          </div>
          <div className="content-right">
            <Switch>
              {/* 默认加载此页面,但是cordava打包App后不适用,添加登录后刷新stata的方法 */}
              <Route exact path='/' component={Welcome} />
              <Route path='/Welcome' component={Welcome} />
              <Route path='/QRCode' component={QRCode} />
              <Route path='/New' component={New} />
              <Route path='/My' exact = {true} component={My} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
