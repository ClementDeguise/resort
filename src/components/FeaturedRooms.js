import React from 'react'

import { RoomContext } from '../context'
import Loading from './Loading'
import Room from '../components/Room'
import Title from './Title'


export default class FeaturedRooms extends React.Component {


/*
 using context : set up a static context variable with our context
 need the whole context to use parts of it later


*/


static contextType = RoomContext;


render() {

	const value = this.context;
	//console.log(value);

	// retrieve the featuredRooms as "rooms" from the context
	// use a let for variable, and not a const
	let { loading, featuredRooms : rooms } = this.context;

	console.log(rooms);

	// rendering each room separately using the generic component outside the JSX
	rooms = rooms.map(room => {
		return <Room key={room.id} room={room} />
	});

	return (

		<section className="featured-rooms">                            
			<Title title="featured-rooms" />
				<div className="featured-rooms-center">
					{loading ? <Loading/> : rooms}
				</div>

		</section>


	)}







}