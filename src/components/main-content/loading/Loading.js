import React from 'react';
import loading from '../../../assets/loading.gif';
import './loading.css';

const Loading = (props) => {
  return (
    <div>
        <img id='loading-image' src={loading}/>
    </div>
  )
}

export default Loading;