import React, { Component } from 'react';
//import axios from 'axios';
import Header from './component/Header';
import LivePrice from './component/LivePrice';

class App extends Component {	
	constructor(props){
		super(props);
		this.state = {
			title : "Live Cryptocurrency",
			btcPrice : '0',
			ethPrice : '0',
			xrpPrice : '0',
			btcPCT : '0%',
			ethPCT : '0%',
			xrpPCT : '0%',
			isActive : false,
		}
	}

	_pageReload = () => {
		window.location.reload();
	}
	
	_getPrice = () => {
		return fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=KRW&&api_key=e04447345e2dc44046b1ffbc38ee236c71605c813b2b77e2ad3aa1c3ce6ae252')
		.then(potato => potato.json())
		.then( response => {
			this.setState({
				btcPrice : response.DISPLAY.BTC.KRW.PRICE,
				ethPrice : response.DISPLAY.ETH.KRW.PRICE,
				xrpPrice : response.DISPLAY.XRP.KRW.PRICE,
				btcPCT : response.DISPLAY.BTC.KRW.CHANGEPCT24HOUR,
				ethPCT : response.DISPLAY.ETH.KRW.CHANGEPCT24HOUR,
				xrpPCT : response.DISPLAY.XRP.KRW.CHANGEPCT24HOUR,
				isActive : true,
			})
		})
	}

	componentDidMount(){
		this._getPrice();
	}

	componentWillReceiveProps(nextProps) {
		if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user))
		{
			this._getPrice();
		}
	}

	render() {
		const { title , btcPrice , ethPrice, xrpPrice, btcPCT, ethPCT, xrpPCT, isActive} = this.state;

		return (
			<div className="bx">
				<Header title={title}/>
				<LivePrice 
					btcPrice={btcPrice} 
					ethPrice={ethPrice} 
					xrpPrice={xrpPrice}
					btcPCT={btcPCT} 
					ethPCT={ethPCT} 
					xrpPCT={xrpPCT}
					isActive={isActive}
				/>
			</div>
		);
	}
}

export default App;
