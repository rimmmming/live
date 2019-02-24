import React, { Component } from 'react';
//import axios from 'axios';
import Header from './Header';
import LivePrice from './LivePrice';

class App extends Component {	
	state = {
		title : "Live Cryptocurrency",
		information : []
	}

	componentDidMount(){
		
		const getPrice = () => {
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
				})
				//console.log(response.DISPLAY.BTC.PRICE)

			})
		}
		getPrice();
		
	}

	render() {
		const { title , btcPrice , ethPrice, xrpPrice, btcPCT, ethPCT, xrpPCT} = this.state;

		return (
			<div className="bx">
				<Header title={title} />
				<LivePrice 
					btcPrice={btcPrice} 
					ethPrice={ethPrice} 
					xrpPrice={xrpPrice}
					btcPCT={btcPCT} 
					ethPCT={ethPCT} 
					xrpPCT={xrpPCT}
				/>
			</div>
		);
	}
}

export default App;
