import React from 'react'



export default function Hero({ children, hero}) {

/*
We need to access the inside of the images with text and stuff, so pass some props
We also need to have different sizes for the hildren, so we use props

/// what about passing default props ? make the home class the default one



*/


	return (

		<header className={hero}>
			{children}
		</header>

	)
}




Hero.defaultProps = {
	hero: "defaultHero"
}