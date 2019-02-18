import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';

class Live extends Component {
	
    static defaultProps = {
        pageTitle : "Live Cryptocurrency"
    }
    static propTypes = {
        pageTitle : PropTypes.string.isRequired
	}
	handleRefresh = () => {
		window.location.reload(); 
	}
	render() {
		return (
			<div className="bx">
				<header>
					<h1>{this.props.pageTitle}</h1>
					<p className="countdown">60</p>
					<button className="btn_reload" onClick={this.handleRefresh}>
						<span className="blind">Refresh</span>
					</button>
				</header>
			</div>
		);
	}
}

export default Live;
