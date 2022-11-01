import React, { useState } from 'react'

const Artist = ({ name, genre, intro }) => {

    return (
        <div>
            <h2>{name}</h2>
            <em id='genre'>{genre}</em>
            <p>{intro}</p>
        </div>
    )
};

export default Artist;