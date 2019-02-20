import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
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
				<article>
				<table class="type09">
					<caption>Cryptocurrency Live</caption>
					<thead>
						<tr>
							<th><a href="https://cryptowat.ch/markets/bithumb/btc/krw">BTC/KRW</a></th>
							<th><a href="https://cryptowat.ch/markets/bithumb/eth/krw">ETH/KRW</a></th>
							<th><a href="https://cryptowat.ch/markets/bithumb/xrp/krw">XRP/KRW</a></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="active">
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
									<div>₩ 4,255,409</div>
								</a>
							</td>
							<td class="active">
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">
									<div>₩ 153,893</div>
								</a>
							</td>
							<td class="active">
								<a href="https://cryptowat.ch/markets/bithumb/xrp/krw">
									<div>₩ 351</div>
								</a>
							</td>
						</tr>
						<tr>
							<td class="active">
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
									<div>0.25 %</div>
								</a>
							</td>
							<td class="active">
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">
									<div>-3.35 %</div>
								</a>
							</td>
							<td class="active">
								<a href="https://cryptowat.ch/markets/bithumb/xrp/krw">
									<div>-0.26 %</div>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				</article>
			</div>
		);
	}
}

export default Live;
