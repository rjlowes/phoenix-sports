import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends Component {

    renderNav(items, level, props = {}) {
        return (
            <ul className={`nav-list nav-list--l${level}`}>
                {items.map((v, k) => this.renderNavItem(v, k, level))}
            </ul>
        );
    }

    renderNavItem(item, key, level, props = {}) {
        return (
            <li key={key} className={`nav-list__item nav-list__item--l${level}`}>
                <Link to={`/category/${item.slug}`}
                    className={`nav-list__item-link nav-list__item-link--l${level}`}
                    onClick={this.props.onClick}>{item.name}</Link>
                    {item.children ? this.renderNav(item.children, 1) : null}
            </li>
        );
    }

    render() {
        // TODO I think the cats are empty array to start
        if(!this.props.categories) {
            return null;
        }
        
        return this.renderNav(this.props.categories, 0);
    }
}
