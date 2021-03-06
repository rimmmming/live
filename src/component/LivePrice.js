import React, { Component } from 'react';

class LivePrice extends Component {
	render() {
		const { url, btcPrice , ethPrice, xrpPrice, btcPCT, ethPCT, xrpPCT, isActive } = this.props;
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
								<a href={url[0]}>BTC/KRW</a>
							</th>
							<th>
								<a href={url[1]}>ETH/KRW</a>
							</th>
							<th>
								<a href={url[2]}>XRP/KRW</a>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className={isActive ? 'active' : ''}>
								<a href={url[0]}>
									<div>{btcPrice}</div>
								</a>
							</td>
							<td className={isActive ? 'active' : ''}>
								<a href={url[1]}>
									<div>{ethPrice}</div>
								</a>
							</td>
							<td className={isActive ? 'active' : ''}>
								<a href={url[2]}>
									<div>{xrpPrice}</div>
								</a>
							</td>
						</tr>
						<tr>
							<td className={isActive ? 'active' : ''}>
								<a href={url[0]}>
									<div>{btcPCT} %</div>
								</a>
							</td>
							<td className={isActive ? 'active' : ''}>
								<a href={url[1]}>
									<div>{ethPCT} %</div>
								</a>
							</td>
							<td className={isActive ? 'active' : ''}>
								<a href={url[2]}>
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
