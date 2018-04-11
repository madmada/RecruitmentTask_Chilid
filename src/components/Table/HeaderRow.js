import React from 'react';
import * as headerRowProps from '../../constants/headerRowProps';
import { sortBy } from 'lodash';
import { parseDate } from './Row';
import SortHeader from './SortArrow';

function idSort(items, sortProps) {
    return sortBy(items, headerRowProps.ID_PROP);
}

function firstNameSort(items, sortProps) {
    return sortBy(items, headerRowProps.FIRST_NAME_PROP);
}

function lastNameSort(items, sortProps) {
    return sortBy(items, headerRowProps.LAST_NAME_PROP);
}

function birthDateSort(items, sortProps) {
    return sortBy(items, function (dateObj) {
        var dateTime = parseDate(dateObj.dateOfBirth);
        return dateTime.getTime();
    });
}

function companySort(items, sortProps) {
    return sortBy(items, headerRowProps.COMPANY_PROP);
}

function noteSort(items, sortProps) {
    return sortBy(items, headerRowProps.NOTE_PROP);
}

export default function HeaderRow({
    setSort,
    sortProps
}) {
    const onIdSort = (items) => { setSort(headerRowProps.ID_PROP, idSort) };
    const onFirstNameSort = (items) => { setSort(headerRowProps.FIRST_NAME_PROP, firstNameSort) };
    const onLastNameSort = (items) => { setSort(headerRowProps.LAST_NAME_PROP, lastNameSort) };
    const onBirthDateSort = (items) => { setSort(headerRowProps.BIRTH_DATE_PROP, birthDateSort) };
    const onCompanySort = (items) => { setSort(headerRowProps.COMPANY_PROP, companySort) };
    const onNoteSort = (items) => { setSort(headerRowProps.NOTE_PROP, noteSort) };

    return (
        <tr>
            <SortHeader text={"iD"} setSort={onIdSort} property={headerRowProps.ID_PROP} sortProps={sortProps} />
            <SortHeader text={"First Name"} setSort={onFirstNameSort} property={headerRowProps.FIRST_NAME_PROP} sortProps={sortProps} />
            <SortHeader text={"Last Name"} setSort={onLastNameSort} property={headerRowProps.LAST_NAME_PROP} sortProps={sortProps} />
            <SortHeader text={"Birth date"} setSort={onBirthDateSort} property={headerRowProps.BIRTH_DATE_PROP} sortProps={sortProps} />
            <SortHeader text={"Company"} setSort={onCompanySort} property={headerRowProps.COMPANY_PROP} sortProps={sortProps} />
            <SortHeader text={"Note"} setSort={onNoteSort} property={headerRowProps.NOTE_PROP} sortProps={sortProps} />
        </tr>
    );
}