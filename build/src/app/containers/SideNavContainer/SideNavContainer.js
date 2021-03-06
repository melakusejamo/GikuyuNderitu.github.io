import React, { Component } from 'react';
import {container, sideNav, active} from './SideNavContainer.sass';

import {NavList} from 'Containers/MainContainer/MainContainer'

class SideNavContainer extends Component {
	getClassName = () => this.props.className ? this.props.className : ''
	getActiveStyle = (style) => this.props.toggled ? `${style} ${active} ${this.getClassName()}` : `${style} ${this.getClassName()}`

	stopProp = e => e.stopPropagation();

	componentDidMount() {
		const e = document.getElementById("sideNav");
		const anchors = e.getElementsByTagName("a");

		const bindLinkToParent = link => {
			const parent = link.parentNode;

			parent.onclick = e => {
				window.location.assign(link.href);
				this.props.toggleVisibility();
			}
		}

		Array.from(anchors).forEach(bindLinkToParent)
	}

	render() {
		const containerStyle = this.getActiveStyle(container);
		const contentStyle = this.getActiveStyle(sideNav)
		return (
			<div id="sideNav" className={containerStyle} onClick={this.props.toggleVisibility}>
				<div className={contentStyle} onClick={this.stopProp}>
					{this.props.children}
				</div>
			</div>
		)	
	}
}

export default SideNavContainer;