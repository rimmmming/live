(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(52)},31:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),l=n.n(r),i=(n(31),n(15)),o=n.n(i),s=n(23),u=n(2),m=n(3),h=n(5),E=n(4),p=n(9),d=n(6),b=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.countDown,a=e._pageReload;return c.a.createElement("header",null,c.a.createElement("h1",null,t),c.a.createElement("p",{className:"countdown"},n),c.a.createElement("button",{type:"button",className:"btn_reload",onClick:function(){return a()}},c.a.createElement("span",{className:"blind"},"Refresh")))}}]),t}(a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,n=e.btcPrice,a=e.ethPrice,r=e.xrpPrice,l=e.btcPCT,i=e.ethPCT,o=e.xrpPCT,s=e.isActive;return c.a.createElement("article",null,c.a.createElement("h2",{className:"h_type"},"Live Prices",c.a.createElement("span",null,c.a.createElement("span",null),"17:11")),c.a.createElement("table",{className:"type09"},c.a.createElement("caption",null,"Cryptocurrency Live"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("a",{href:t[0]},"BTC/KRW")),c.a.createElement("th",null,c.a.createElement("a",{href:t[1]},"ETH/KRW")),c.a.createElement("th",null,c.a.createElement("a",{href:t[2]},"XRP/KRW")))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:s?"active":""},c.a.createElement("a",{href:t[0]},c.a.createElement("div",null,n))),c.a.createElement("td",{className:s?"active":""},c.a.createElement("a",{href:t[1]},c.a.createElement("div",null,a))),c.a.createElement("td",{className:s?"active":""},c.a.createElement("a",{href:t[2]},c.a.createElement("div",null,r)))),c.a.createElement("tr",null,c.a.createElement("td",{className:s?"active":""},c.a.createElement("a",{href:t[0]},c.a.createElement("div",null,l," %"))),c.a.createElement("td",{className:s?"active":""},c.a.createElement("a",{href:t[1]},c.a.createElement("div",null,i," %"))),c.a.createElement("td",{className:s?"active":""},c.a.createElement("a",{href:t[2]},c.a.createElement("div",null,o," %")))))))}}]),t}(a.Component);var f=function(e){var t=e.date,n=e.title,a=e.href,r=e.img,l=e.newsContent;return c.a.createElement("li",null,c.a.createElement("a",{href:a},c.a.createElement("div",{className:"bx2"},c.a.createElement("img",{src:r,width:"60",height:"60",alt:""})),c.a.createElement("dl",null,c.a.createElement("dt",null,c.a.createElement("time",{dateTime:t})," ",n),c.a.createElement("dd",null,c.a.createElement("p",null,l)))))},v=n(24),P=n.n(v),C=n(16),y=(n(51),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(E.a)(t).call(this,e)))._pageReload=function(){window.location.reload()},n._countDownStart=function(){n.interval=setInterval(function(){n.setState({countDown:n.state.countDown-1}),0===n.state.countDown&&(n.setState({countDown:60}),clearInterval(n.interval))},1e3)},n._getPrice=function(){return fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=KRW&&api_key=e04447345e2dc44046b1ffbc38ee236c71605c813b2b77e2ad3aa1c3ce6ae252").then(function(e){return e.json()}).then(function(e){n.setState({btcPrice:e.DISPLAY.BTC.KRW.PRICE,ethPrice:e.DISPLAY.ETH.KRW.PRICE,xrpPrice:e.DISPLAY.XRP.KRW.PRICE,btcPCT:e.DISPLAY.BTC.KRW.CHANGEPCT24HOUR,ethPCT:e.DISPLAY.ETH.KRW.CHANGEPCT24HOUR,xrpPCT:e.DISPLAY.XRP.KRW.CHANGEPCT24HOUR,isActive:!0})})},n._makeNewsList=function(){return n.state.newsFeeds.map(function(e){return c.a.createElement(f,{date:e.published_on,title:e.title,href:e.url,img:e.imageurl,newsContent:e.body})})},n._getNews=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=(t=e.sent).slice(0,n.state.newsCount),console.log(t),n.setState({newsFeeds:t});case 6:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN").then(function(e){return e.json()}).then(function(e){return e.Data}).catch(function(e){return console.log(e)})},n._moreNews=function(){n._getNews(),n.setState({newsCount:n.state.newsCount+5,newsFeeds:n.state.newsFeeds.concat(n.state.newsFeeds)}),Object(C.toast)("Update!!",{autoClose:2e3})},n.reloadFunc=n._pageReload.bind(Object(p.a)(n)),n.state={title:"Live Cryptocurrency",url:["https://cryptowat.ch/markets/bithumb/btc/krw","https://cryptowat.ch/markets/bithumb/eth/krw","https://cryptowat.ch/markets/bithumb/xrp/krw"],btcPrice:"0",ethPrice:"0",xrpPrice:"0",btcPCT:"0",ethPCT:"0",xrpPCT:"0",isActive:!1,countDown:60,newsDate:null,newsCount:5,loadingActive:!0},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this._getPrice(),this._getNews()}},{key:"componentDidMount",value:function(){this._countDownStart(),this.setState({loadingActive:!1})}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.url,a=e.countDown,r=e.btcPrice,l=e.ethPrice,i=e.xrpPrice,o=e.btcPCT,s=e.ethPCT,u=e.xrpPCT,m=e.isActive,h=e.newsFeeds,E=e.newsCount,p=e.loadingActive,d=this._moreNews;return c.a.createElement("div",{className:"bx"},c.a.createElement(b,{title:t,countDown:a}),c.a.createElement(w,{url:n,btcPrice:r,ethPrice:l,xrpPrice:i,btcPCT:o,ethPCT:s,xrpPCT:u,isActive:m}),c.a.createElement("article",null,c.a.createElement("div",{className:"h_area"},c.a.createElement("h2",null,"Recent News ",c.a.createElement("span",null,c.a.createElement("span",null),"16:56")),c.a.createElement("button",{type:"button"},"EN > KR")),c.a.createElement("ul",null,h?this._makeNewsList():p),c.a.createElement("button",{type:"button",className:"btn_type",onClick:function(){return d()}},"More (",E,"/50) ")),c.a.createElement(P.a,{active:p,spinner:!0,text:"Loading..."}),c.a.createElement(C.ToastContainer,{autoClose:2e3}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.17f87d91.chunk.js.map