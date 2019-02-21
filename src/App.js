import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="bx">
				<header>
					<h1>Live Cryptocurrency</h1>
					<p className="countdown">60</p>
					<button className="btn_reload">
						<span className="blind">Refresh</span>
					</button>
				</header>
				<article>
				<table className="type09">
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
							<td className="active">
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
									<div>₩ 153,893</div>
								</a>
							</td>
							<td className="active">
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">
									<div>₩ 153,893</div>
								</a>
							</td>
							<td className="active">
								<a href="https://cryptowat.ch/markets/bithumb/xrp/krw">
									<div>₩ 351</div>
								</a>
							</td>
						</tr>
						<tr>
							<td className="active">
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
									<div>0.25 %</div>
								</a>
							</td>
							<td className="active">
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">
									<div>-3.35 %</div>
								</a>
							</td>
							<td className="active">
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

export default App;
