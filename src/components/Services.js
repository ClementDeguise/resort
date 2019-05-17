import React from 'react'
import Title from './Title'

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'


export default class Services extends React.Component {

// could use an external API for these
// add text-transform: capitalize in the CSS to even the style
// check grid-template-column




	state={
		services: [
		{
			icon:<FaCocktail/>,
			title:"free cocktails",
			info: "fancy text",
		},
		{
			icon:<FaHiking/>,
			title:"Endless hiking",
			info: "fancy text",
		},
		{
			icon:<FaShuttleVan/>,
			title:"Free shuttle",
			info: "fancy text",
		},
		{
			icon:<FaBeer/>,
			title:"Strong as beer",
			info: "fancy text",
		},

		]
	}

	render() {

		return (

			<section className="services">
				<Title title="services" />
				<div className="services-center">
				{this.state.services.map((item, index) => {
						return (
						<article key={index + item.title} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>

						);
					})
				}
				</div>
			</section>


	)}


}