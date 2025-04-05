import React from "react";

export const DigiCounter = ({DigiNumber}) => {
    return(
        <div className="bg-dark text-white">
            <p className="contador fs-1 text">
             {DigiNumber} 
            </p>
        </div>
    )
}