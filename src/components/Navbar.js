import React from 'react'

// logo for small screens, ../ to go up 1 directory, and ../.. to go up 2 directories
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
// links to route to home page and stuff
import { Link } from 'react-router-dom'




export default class Navbar extends React.Component {

	constructor() {
		super();
		this.state={
			isOpen: false
		}

		this.handleToggle = this.handleToggle.bind(this);
	}
	
	handleToggle= () => {
		this.setState({isOpen: !this.state.isOpen})
	}



	/* 
	better display the links in a separate component, as mapping
	the show-nav class override the height 0 of the links, so when
	we click, they still display. Could also use an inline styling variable




	*/

	render() {


		return (
			<nav className="navbar"> 
				<div className="nav-center">

					<div className="nav-header">

						<Link to="/">
							<img src={logo} alt="Beach Resort" />
						</Link> 

						<button type="button" className="nav-btn" onClick={this.handleToggle}>
							<FaAlignRight className="nav-icon" />
						</button>

					</div>

					<ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
						<li> <Link to="/">Home</Link> </li>
						<li> <Link to="/rooms">Rooms</Link> </li>
					</ul>
				</div>
			</nav>
	)}
	
}