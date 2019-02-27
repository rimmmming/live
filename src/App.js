import React, { Component } from 'react';
import Header from './component/Header';
import LivePrice from './component/LivePrice';

class App extends Component {
    constructor(props){
        super(props);
        this.onClick = this._pageReload.bind(this);
        this.state = {
            title : "Live Cryptocurrency",
			url : [
				'https://cryptowat.ch/markets/bithumb/btc/krw',
				'https://cryptowat.ch/markets/bithumb/eth/krw',
				'https://cryptowat.ch/markets/bithumb/xrp/krw',
			],
            btcPrice : '0',
            ethPrice : '0',
            xrpPrice : '0',
            btcPCT : '0%',
            ethPCT : '0%',
            xrpPCT : '0%',
            isActive : false,
            countDown : 60,
            
        }
    }

    _pageReload = () => {
        window.location.reload();
    }

    _countDownStart = () => {
        this.interval = setInterval(() => {
            this.setState({
                countDown : this.state.countDown - 1
            })
            if(this.state.countDown === 0){
                this.setState({
                    countDown : 60
                })
                clearInterval(this.interval);   
                //this._pageReload();
            }
            //console.log(this.state.countDown)
        }, 1000)
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
        this._countDownStart();
    }

    render() {
        const { title, url, countDown, btcPrice , ethPrice, xrpPrice, btcPCT, ethPCT, xrpPCT, isActive} = this.state;

        return (
            <div className="bx">
                <Header title={title} countDown={countDown}/>
                <LivePrice
					url={url}
                    btcPrice={btcPrice}
                    ethPrice={ethPrice}
                    xrpPrice={xrpPrice}
                    btcPCT={btcPCT}
                    ethPCT={ethPCT}
                    xrpPCT={xrpPCT}
                    isActive={isActive}
                />
                <article>
                    <div className="h_area">
                        <h2>Recent News <span><span></span>16:56</span></h2>
                        <button type="button">EN &gt; KR</button>
                    </div>
                    <ul>
                        <li>
                            <a href="https://www.ccn.com/bahrain-becomes-first-arab-nation-to-comprehensively-regulate-bitcoin">
                            <div className="bx2"><img src="https://images.cryptocompare.com/news/ccn/cgPx00w08g0.jpeg" width="60" height="60" alt="" /></div>
                            <dl>
                                <dt>
                                    <time dateTime="1551253824000">19/02/27 16:50</time> Bahrain Becomes First Arab Nation to Comprehensively Regulate Bitcoin
                                </dt>
                                <dd>
                                    <p>A couple months ago, CCN reported that Bahrain had completed its draft regulations for cryptocurrencies. The Arab nation has now&nbsp;completed its finalized version of the same, and it hasn’t noted much change in its positive disposition. According to a post on the Central Bank of Bahrain’s website, the country is now a safe place to do business crypto assets. Khalid Hamid, the director of Banking Supervision, says: The CBB’s introduction of the rules relating to crypto-assets is in line with its goal to develop a comprehensive rules for the FinTech eco-system supporting Bahrain’s position as a leading financial hub in The post Bahrain Becomes First Arab Nation to Comprehensively Regulate Bitcoin appeared first on CCN</p>
                                </dd>
                            </dl>
                            </a>
                        </li>
                    </ul>
                    <button type="button" className="btn_type">More (5/50) </button>
                </article>
            </div>
        );
    }
}

export default App;