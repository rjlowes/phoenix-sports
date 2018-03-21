import React from 'react';

const MenuGroup = ({title, items}) => (
    <div className="list-group-menu">
        <h4 className="list-group-menu__heading">{title}</h4>
        <ul className="list-menu">
            {items.map((item, i) => {
                return (
                    <li className="list-menu__item" key={i}>
                        <a href={item.href} className="list-menu__item-link list-menu__item-link--light">{item.label}</a>
                    </li>
                )
            })}
        </ul>
    </div>
);

export default MenuGroup;
