import React from 'react';

const CategoryHeader = ({ category, count }) => {
    if(!category) return null;

    return (
        <header className="header-basic">
            <h1>{ category.name }</h1>
            <span>{ count }</span>
        </header>
    );
};

export default CategoryHeader;
