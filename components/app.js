
import React from 'react'
import Home from './home.js'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className='wrap'>	
				<header>
					<p>航海西路郑密路82号院，轻点两下重新选择</p>
					<input type="text" value='点击进行搜索'/>
				</header>
				<section>
				<Home/>
				</section>
				
				<footer>
					<span className='blue'>首页</span>
					<span>发现</span>
					<span>订单</span>
					<span>我的</span>
				</footer>
			</div>
		)
	}
}

export default App;