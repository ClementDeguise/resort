import styled from 'styled-components'
// we dont need to import react !!
import defaultImg from '../images/room-1.jpeg'




// styled + the html element we want to create
// we access props
const StyledHero = styled.header`
	min-height: 60vh;
	background: url(${props => props.img && defaultImg}) center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;

`;



export default StyledHero


