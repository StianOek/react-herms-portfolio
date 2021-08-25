import * as React from "react";
import styled from "styled-components";

const Button = (props) => (
	<Wrapper>
		{props.children}
	</Wrapper>
);

export default Button;

const Wrapper = styled("button")`
	z-index: -1;
	line-height: 1.6;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	/* INHERITED COLOR */
	min-width: 100px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 300;
	border-radius: 10px;
	padding: 10px 20px;
	text-align: center;
	display: inline-block;
	transition:  0.2s;
	border: none;
	//margin-right: 20px;
	margin-bottom: 20px;
	img {
		margin-left: 5px;
		height: 22px;
		width: auto;
	}
	:focus {
		outline: none;
	}
	:active{
		background-color: black;
		color: white;
	}

	@media (min-width: 500px) {
		&:hover {
		transform: scale(1.02);
		}
	}
	opacity: ${(props) => (props.disabled ? "0.5 !important" : 1)};
	pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;