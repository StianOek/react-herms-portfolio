import React from 'react'
import styled from 'styled-components';

const Menu = () => {
return(

    <MenuBtn>
        <span/>
        <span/>
        <span/>
    </MenuBtn>
)
   


}

const MenuBtn = styled.div`

	top: 29px;
	right: 20px;
	width: 28px;
	position: fixed;
	margin: auto;
	transform: rotate(0deg);
	cursor: pointer;
	height: 20px;
	z-index: 10;
	span {
		position: absolute;
		display: block;
		height: 3px;
		width: 100%;
		background: #212121;
		border-radius: 9px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
		:nth-child(1) {
			top: 0px;
			transform-origin: left center;
		}
		:nth-child(2) {
			width: 90%;
			top: 8px;
			transform-origin: left center;
		}
		:nth-child(3) {
			top: 16px;
			transform-origin: left center;
		}
	}
	&.menu-open {
		span:nth-child(1) {
			transform: rotate(45deg);
			top: -3px;
			left: 8px;
		}
		span:nth-child(2) {
			width: 0%;
			opacity: 0;
		}
		span:nth-child(3) {
			transform: rotate(-45deg);
			top: 16px;
			left: 8px;
		}
	}
`

export default Menu;