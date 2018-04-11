import React from 'react';
import Cell from './Cell';
import { MONTHS } from '../../constants/months';

export function parseDate(str) {
    var m = String(str).match(/^(\d{1,2}).(\d{1,2}).(\d{4}) (\d{1,2}):(\d{1,2})$/);
    return (m) ? new Date(m[3], m[2] - 1, m[1]) : null;
}

export default function Row({
    item,
}) {
    const { id, firstName, lastName, dateOfBirth, company, note } = item;
    const pDate = parseDate(String({ dateOfBirth }.dateOfBirth));

    const fullBirthdayDate = pDate.getDay() + 1 + " " + MONTHS[pDate.getMonth()] + " " + pDate.getFullYear();

    return (
        <tr>
            <Cell value={id} />
            <Cell value={firstName} />
            <Cell value={lastName} />
            <Cell value={fullBirthdayDate} />
            <Cell value={company} />
            <Cell value={note} />
        </tr>
    );
}