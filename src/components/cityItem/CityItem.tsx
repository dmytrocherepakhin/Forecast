import React from "react";

function CityItem(props:any):JSX.Element{
    return(
    <div>
        <h2>{props.city}</h2>
        <button>Show forecast</button>
        <button>Delete city</button>
    </div>
    )
}

export default CityItem