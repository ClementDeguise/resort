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
			loading: true
		};

		this.formatData = this.formatData.bind(this);
	}

	

	// sortedRooms will be filtered for the filter part of the app


	// the formatData function will suffice. We return a cleaned JSON of rooms id,
	// rooms image url and room content





	componentDidMount() {
		let rooms = this.formatData(items)
		//console.log(rooms)
		let featuredRooms = this.state.rooms.filter(room => room.featured === true);
		
		// update state
		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false
		})

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
		
	}






	render() {

		return (

			<RoomContext.Provider value={this.state}>
				{this.props.children}



			</RoomContext.Provider>		

		)}

}


export { RoomProvider, RoomConsumer, RoomContext };
export default RoomProvider;
