import React, { Component } from 'react';

class LivePrice extends Component {
	render() {
		const { btcPrice , ethPrice, xrpPrice, btcPCT, ethPCT, xrpPCT } = this.props;
		return (
			<article>
				<h2 className="h_type">Live Prices 
					<span>
						<span></span>
						17:11
					</span>
				</h2>
				<table className="type09">
					<caption>Cryptocurrency Live</caption>
					<thead>
						<tr>
							<th>
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">BTC/KRW</a>
							</th>
							<th>
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">ETH/KRW</a>
							</th>
							<th>
								<a href="https://cryptowat.ch/markets/bithumb/xrp/krw">XRP/KRW</a>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
									<div>{btcPrice}</div>
								</a>
							</td>
							<td>
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">
									<div>{ethPrice}</div>
								</a>
							</td>
							<td>
								<a href="https://cryptowat.ch/markets/bithumb/xrp/krw">
									<div>{xrpPrice}</div>
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<a href="https://cryptowat.ch/markets/bithumb/btc/krw">
									<div>{btcPCT} %</div>
								</a>
							</td>
							<td>
								<a href="https://cryptowat.ch/markets/bithumb/eth/krw">
									<div>{ethPCT} %</div>
								</a>
							</td>
							<td>
								<a href="https://cryptowat.ch/markets/bithumb/xrp/krw">
									<div>{xrpPCT} %</div>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</article>
		);
	}
}

export default LivePrice;
