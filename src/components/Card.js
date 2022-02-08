import React from "react";
import App from "../App"
import Location from "./Location";


function Card(props){
    return (
        <div className="flex space-x-4 mx-4 flex-shrink-0 flex-grow-0">
            <div className="flex-shrink-0">
                <img src={props.item.imageUrl} className="h-52 w-40 rounded-lg" />
            </div>
            <div>
                <span className="flex items-center"><Location/>{props.item.location} <a className="ml-3 text-gray-400 text-sm" href={props.item.googleMapsUrl}>view on google maps</a> </span>
                <h1 className="text-3xl font-bold py-2">{props.item.title}</h1>
                <h4 className="py-2 text-md font-semibold">{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}



export default Card