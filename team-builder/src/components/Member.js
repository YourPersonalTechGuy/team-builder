import React from "react";

export default function Member(props) {
    const { value } = props

    if(!value){
        <h2>Getting data...</h2> 
    }

    return (
        <div className="Member Container">
            <h2>{`${value.fname} ${value.lname}`}<br></br> {`Codename: ${value.codename}`}</h2>
            <p>{`Position: ${value.position}`}</p>
            <p>{`Email: ${value.email}`}</p>
        </div>
    )
}