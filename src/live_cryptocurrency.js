import React, { Component } from 'react';
import './App.css';

class Live_price extends Component {

	render() {
		return (
			<tr>
				<td className="active">
					<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
						<div></div>
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
		);
	}
}

export default Live_price;
