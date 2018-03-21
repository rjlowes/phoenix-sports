import React from 'react';
import {Link} from 'react-router-dom';

import Toolbar from 'modules/layout/components/Toolbar';
import MenuButton from 'modules/layout/components/MenuButton';
import Menu from 'modules/layout/components/Menu';
import Search from 'modules/layout/components/Search';
import MiniBasketSummary from 'modules/layout/components/minibasket/MiniBasketSummary';
import BodyClassToggleButton from 'components/buttons/BodyClassToggleButton';

const Header = () => {
    return (
        <header className="g-header">
            <Toolbar />

            <div className="g-header__wrapper">
                <div className="g-header__grid">

                    <div className="g-header__logo">
                        <Link to="/" className="logo" href="#/">
                            <img src="/images/logo3.png" style={{ width: '50px' }} />
                        </Link>
                    </div>
                    <div className="g-header__navigation">
                        <Menu />
                    </div>
                    <div className="g-header__search">
                        <Search />
                    </div>
                    <div className="g-header__btn-group">
                        <ul className="list-action">
                            <li className="list-action__item list-action__item--tight">
                                <BodyClassToggleButton clazz="action-search-show">
                                    <img src="/svg/magnify.svg" />
                                </BodyClassToggleButton>
                            </li>
                            <li className="list-action__item list-action__item--tight"><Link className="list-action__link" to="/login"><img src="/svg/shopping-basket.svg" /></Link></li>
                            <li className="list-action__item list-action__item--tight">
                                <BodyClassToggleButton clazz="action-nav-show">
                                    <img src="/svg/menu.svg" />
                                </BodyClassToggleButton>
                            </li>
                            {/*
                            <li className="list-action__item list-action__item--tight"><MenuButton open={true} /></li>
                            */}
                        </ul>
                    </div>
                    {/*
                    <div className="g-header__basket">
                        <MiniBasketSummary />
                    </div>
                    */}
                </div>
            </div>
        </header>
    );
};

export default Header;
