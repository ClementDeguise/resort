import React from 'react'
import LoadingGif from '../images/gif/loading-arrow.gif'


export default function Loading() {


/*
loading logo animation


*/


	return (

		<div className="loading">
			<h4>Room data loading...</h4>
			<img src={LoadingGif} alt="" />
		</div>


	)

}