import React from 'react';

const HeadedList = () => (
    <ul className="headed-list">
        <li className="headed-list__item">
            <span className="headed-list__hd">Header 1</span>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </li>
    </ul>
);

export default HeadedList;
