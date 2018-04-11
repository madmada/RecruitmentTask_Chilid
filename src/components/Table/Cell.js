import React from 'react';

export default function Cell({ value }) {
    return (
        <td className="cell">
            {value}
        </td>
    );
}