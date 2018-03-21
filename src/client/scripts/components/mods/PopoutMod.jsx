import React from 'react';

const PopoutMod = ({heading, children}) => (
    <div className="mod-popout">
        <span className="mod-popout__heading">{ heading }</span>
        <div className="mod-popout__main">{ children }</div>
    </div>
);

export default PopoutMod;
