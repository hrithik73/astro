import React from 'react';
import ReactLoading from 'react-loading';

import "../App.css"

const NotLoaded = () => {
    return (
        <div className="loading" >
            <ReactLoading
                type="cubes"
                color="#778899"
                height='100%'
                width='90%'
            />
        </div>
    )
}
export default NotLoaded