import React, { Component } from 'react';

class Header extends Component {
	render() {
		const { title, countDown, _pageReload } = this.props;
		return (
			<header>
				<h1>{title}</h1>
				<p className="countdown">{countDown}</p>
				<button type="button" className="btn_reload" onClick={() => _pageReload()}>
					<span className="blind">Refresh</span>
				</button>
			</header>
		);
	}
}

export default Header;
