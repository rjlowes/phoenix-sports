import React, {Component} from 'react';

import NavigationContainer from 'modules/layout/components/NavigationContainer';
import MenuButton from 'modules/layout/components/MenuButton';
import BodyClassToggleButton from 'components/buttons/BodyClassToggleButton';

const Menu = (props) => {

    return (
        <nav className="g-navigation">
            <BodyClassToggleButton clazz="action-nav-show">
                <MenuButton />
            </BodyClassToggleButton>
            {/*<Search />*/}
            {/* <div className="navigation-bg"></div> */}
            <NavigationContainer />
        </nav>
    );
};

export default Menu;
