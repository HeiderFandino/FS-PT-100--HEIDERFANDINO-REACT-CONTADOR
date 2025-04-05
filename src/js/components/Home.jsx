import React from "react";
import { DigiCounter } from "./DigiCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<div className="d-flex justify-content-center my-5">
			<DigiCounter DigiNumber = {<FontAwesomeIcon icon={faHourglassStart} />}/>
			<DigiCounter DigiNumber = {props.counter   >= 100000 ? parseInt(props.counter / 100000 % 10) : 0} />
			<DigiCounter DigiNumber = {props.counter   >= 10000 ? parseInt(props.counter / 10000 % 10): 0} />
			<DigiCounter DigiNumber = {props.counter   >= 1000 ? parseInt(props.counter / 1000 % 10): 0} />
			<DigiCounter DigiNumber = {props.counter   >= 100 ? parseInt(props.counter / 100 % 10) : 0} />
			<DigiCounter DigiNumber=  {props.counter   >= 10 ? parseInt(props.counter  / 10 % 10) : 0} />
			<DigiCounter DigiNumber = {props.counter % 10}/>
			</div>
		</div>
			
			);
};

export default Home;