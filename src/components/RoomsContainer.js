import React from 'react'
import RoomsFilter from '../components/RoomsFilter'
import RoomsList from '../components/RoomsList'
import {Link} from 'react-router-dom'
import {RoomConsumer} from '../context'
import Loading from './Loading'

export default function RoomsContainer() {


/*
container for the room filtering component, and room results component
We use a consumer to import context because i a functional component we cannot access
the context from a static point of view

We render the sorted rooms that will be updated in room filter

*/

	return (

		<RoomConsumer>
			{(value) => {

				const {loading, sortedRooms, rooms} = value;

				if (loading) {
					return <Loading />;
				}

				return (

					<div>
						<RoomsFilter rooms={rooms}/>
						<RoomsList rooms={sortedRooms} />
					</div>

			)}}
		</RoomConsumer>

		

	)

}



/* from higher order component in context
import {withRoomConsumer} from '../context'

function RoomsContainer({context}) {
	const {loading, sortedRooms, rooms} = context;
	if (loading) {
		return <Loading />;
	}

	return (

		<div>
			<RoomsFilter rooms={rooms}/>
			<RoomsList rooms={sortedRooms} />
		</div>

	)
}
*/


// wrapping
//export default withRoomConsumer(RoomsContainer)






