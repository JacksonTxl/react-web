/**
 *  @license
 *  Copyright 2018
 *  @author
 *  fei. zhang
 *  @time
 *  2019-04-10 15:07
 */
import { Menu, Icon, Button } from 'choerodon-ui';
import * as React from 'react';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class SliderMenu extends React.Component {
	state = {
		collapsed: false,
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	goRouter = (routeName) => {
		console.log(routeName);
		// window.location.hostname = routeName;
	};

	render() {
		return (
			<div style={{ width: 256 }}>
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					<Icon type={this.state.collapsed ? 'folder_open' : 'folder'} />
				</Button>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					inlineCollapsed={this.state.collapsed}
					style={{textAlign: 'left'}}
				>
					<Menu.Item key="1">
						<Icon type="pie_chart_outlined" />
						<span onClick={this.goRouter('home')}><Link to="/home">home</Link></span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="desktop_windows" />
						<span><Link to="/about">about</Link></span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="inbox" />
						<span>Option 3</span>
					</Menu.Item>
					<SubMenu key="sub1" title={<span><Icon type="mail_outline" /><span>Navigation One</span></span>}>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="apps" /><span>Navigation Two</span></span>}>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}
export default SliderMenu;
