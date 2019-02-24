import React, { Component } from 'react';

class Header extends Component {
	render() {
		const { title } = this.props;
		return (
			<header>
				<h1>{title}</h1>
				<p className="countdown">60</p>
				<button type="button" className="btn_reload">
					<span className="blind">Refresh</span>
				</button>
			</header>
		);
	}
}

export default Header;
