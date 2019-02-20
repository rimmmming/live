import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';

class App extends Component {
	state = {
		price: []
	}

	componentDidMount() {
		this._getData()
	}

	_getData = async () => {
		const price = await this._callApi()
		this.setState({
			price
		}) 
		console.log(price.BTC.KRW.PRICE)
	}

	_callApi = () => {
		return fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=KRW&&api_key=e04447345e2dc44046b1ffbc38ee236c71605c813b2b77e2ad3aa1c3ce6ae252`)
		.then(potato => potato.json())
		.then(json => json.DISPLAY)
		.catch(err => console.log(err))
	}

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
