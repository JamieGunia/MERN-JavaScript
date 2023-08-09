import React from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>{age}</p>
            <p>{hairColor}</p>
        </div>
    );
}

export default PersonCard;