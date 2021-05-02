import React from 'react'

export default function adapter(props) {
    return (
       <div style={{width: `${props.size}px`}} dangerouslySetInnerHTML={{__html: `${props.svg.data}`}}/>
    );
};
