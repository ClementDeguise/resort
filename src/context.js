import React from 'react'

import items from './data'

/*

 context file : we use the React Context API to load the data for the rooms, caracteristcs, prices, featured,
 and such, basically the whole database.
 Then we will provide the application with the context, and we will be able to consume
 the context in any part of the application to access data. 

 We create a class to use a state for more flexibility

 Its better to wrap the whole index.js with the provider




*/



const RoomContext = React.createContext();

const RoomConsumer = RoomContext.Consumer;





class RoomProvider extends React.Component {

	constructor() {
		super();
		this.state = {
			rooms: [],
			sortedRooms: [],
			featuredRooms: [],
			loading: true,
			type: "all",
			capacity: 1,
			price: 0,
			minPrice: 0,
			maxPrice: 0,
			minSize: 0,
			maxSize: 0,
			breakfast: false,
			pets: false

		};

		this.formatData = this.formatData.bind(this);
		this.getRoom = this.getRoom.bind(this);
	}

	

	// sortedRooms will be filtered for the filter part of the app


	// the formatData function will suffice. We return a cleaned JSON of rooms id,
	// rooms image url and room content





	componentDidMount() {
		let rooms = this.formatData(items)
		//console.log(rooms)
		let featuredRooms = rooms.filter(room => room.featured === true);
		
		let maxPrice = Math.max(...rooms.map(item => item.price));
		let maxSize = Math.max(...rooms.map(item => item.size));

		// update state, set maxes to the data one
		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false,
			price: maxPrice,
			maxPrice,
			maxSize

		})

		//console.log(featuredRooms)
	}



	// On the fact that sometimes the data will map locally but will return an empty array
	// when the function formatdata is called elsewhere : 
	//		The map function needs something to return, or the variable room here, will stay local
	//		Thus we need to return once to instantiate tempItems, and once to return tempItems for others functions to use

	formatData(items) {
		let tempItems = items.map(item => {
			let id = item.sys.id;
			//console.log(id)
			let images = item.fields.images.map(image => image.fields.file.url);

			// get all the fields for the room, exept the images array and id, 
			// that we overwrite
			let room = {...item.fields, images, id}

			return room;
		});

		return tempItems;

	}


	getRoom = (slug) => {
		// first we convert the room object to an array
		let tempRooms = [...this.state.rooms];
		// then we use the find method
		const room = tempRooms.find(room => room.slug===slug);
		return room;
	}


	// filter form handle
	handleChange = event => {

		const target = event.target

		// checkbox exception
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		
		// works for everything we change !
		this.setState({
			[name]: value
			},
			this.filterRooms
		);

	}


	filterRooms = () => {
		let {
			rooms,
			type,
			capacity,
			price,
			minSize,
			maxSize,
			breakfast,
			pets
		} = this.state;

		// all the rooms
		let tempRooms = [...rooms];

		// transform capacity value from string to number
		capacity = parseInt(capacity);


		// but is everything sorted or just the one in particular ?



		// filter by type
		if (type !== "all") {
			tempRooms = tempRooms.filter(room => room.type === type)
		}

		// filter by capacity, return rooms larger than capacity
		if (capacity !== 1) {
			tempRooms = tempRooms.filter(room => room.capacity >= capacity)
		}

		// filter by price
		tempRooms = tempRooms.filter(room => room.price <= price)
		
		// filter by size
		tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

		// filter breakfast
		if (breakfast === true) {
			tempRooms = tempRooms.filter(room => room.breakfast === true)
		}

		// filter pets
		if (pets === true) {
			tempRooms = tempRooms.filter(room => room.pets === true)
		}



		this.setState({
			sortedRooms: tempRooms
		})


	}





	render() {

		return (

			<RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
				{this.props.children}



			</RoomContext.Provider>		

		)}

}


/* other way of using the consumer, with higher order component see RoomContainer
export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
		<RoomConsumer>
			{value => <Component {...props} context={value}/>}
		</RoomConsumer>
	)}
}
*/




export { RoomProvider, RoomConsumer, RoomContext };
export default RoomProvider;
