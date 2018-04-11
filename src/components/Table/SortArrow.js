import React from 'react';
import classNames from 'classnames';

export default function SortHeader({ text, property, setSort, sortProps }) {

    const isActiveSort = sortProps.property === property;

    const cellClass = classNames(
        'cell cell-header',
        {
            'is-active': isActiveSort,
        },
    );

    const iconClass = classNames(
        'fa',
        {
            'fa-sort-up': isActiveSort && sortProps.reverse,
            'fa-sort-down': isActiveSort && !sortProps.reverse,
        }
    );

    return (
        <th className={cellClass} onClick={setSort}>
            {text} <i className={iconClass} />
        </th>
    );
}