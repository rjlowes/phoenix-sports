import React from 'react';
import { connect } from 'react-redux';

const GlobalLoader = () => {
    return (
        <div className="loader-globalx">
            <img className="loader-global" src="/images/loaders/ripple.gif" />
        </div>
    );
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(GlobalLoader);
