import React, { Component } from 'react';
import Header from './component/Header';
import LivePrice from './component/LivePrice';
import NewsList from './component/newsList';
import LoadingOverlay from 'react-loading-overlay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    constructor(props){
        super(props);
        this.reloadFunc = this._pageReload.bind(this);
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
            btcPCT : '0',
            ethPCT : '0',
            xrpPCT : '0',
            isActive : false,
			countDown : 60,
			newsDate : null,
			newsCount : 5,
			loadingActive : true,
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
	_makeNewsList = () => {
        const newsFeeds = this.state.newsFeeds.map(newsFeed => {
			return <NewsList 
			date={newsFeed.published_on}
            title={newsFeed.title}
            href={newsFeed.url}
            img={newsFeed.imageurl}
            newsContent={newsFeed.body}
            />
		})
        return newsFeeds
    }
    _getNews = async () => {
        let newsFeeds = await this._callApi();
        newsFeeds = newsFeeds.slice(0, this.state.newsCount);
        console.log(newsFeeds); 
        this.setState({
			newsFeeds
        })
    }

    _callApi = () => {
        return fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
        .then(strawberry => strawberry.json())
        .then(json => json.Data)
        .catch(err => console.log(err))
    }
    
    _moreNews = () => {
		this._getNews();
        this.setState({
			newsCount : this.state.newsCount + 5,
			newsFeeds : this.state.newsFeeds.concat(this.state.newsFeeds),
		})
		toast('Update!!', {
			autoClose: 2000,
		});
	}
	
	componentWillMount(){
		this._getPrice();
		this._getNews();   
	}

    componentDidMount(){
		this._countDownStart();
		this.setState({
			loadingActive : false
		})
    }

    render() {
		const { title, url, countDown, btcPrice , ethPrice, xrpPrice, btcPCT, ethPCT, xrpPCT, isActive, newsFeeds, newsCount, loadingActive} = this.state;
		const {_moreNews} = this;

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
                        {newsFeeds ? this._makeNewsList() : '' }
                    </ul>
                    <button type="button" className="btn_type" onClick={() => _moreNews()}>More ({newsCount}/50) </button>
                </article>
				<LoadingOverlay
					active={loadingActive}
					spinner
					text='Loading...'
				/>
				<ToastContainer
					autoClose={2000}
				/>
            </div>
        );
    }
}

export default App;