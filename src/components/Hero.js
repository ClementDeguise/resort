import React from 'react'



export default function Hero({ children, hero}) {

/*
We need to access the inside of the images with text and stuff, so pass some props
We also need to have different sizes for the hildren, so we use props

/// what about passing default props ? make the home class the default one

Could place the banners within this component, or in others
components for reusability

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