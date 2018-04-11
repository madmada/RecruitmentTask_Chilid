import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import * as headerRowProps from '../../constants/headerRowProps';
import Row from './Row';
import HeaderRow from './HeaderRow';
import Pagination from '../Pagination';
import { map, sortBy } from 'lodash';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            range: 5,
            offset: 0,
        };
    }

    back = () => {
        const { currentPage, range, offset } = this.state;
        this.setState({
            currentPage: currentPage - 1,
            offset: offset - range,
        })
    };

    forward = () => {
        const { currentPage, range, offset } = this.state;
        this.setState({
            currentPage: currentPage + 1,
            offset: offset + range,
        })
    };

    render() {
        const { items, sortProps, setSort } = this.props;
        const { currentPage, offset, range } = this.state;

        return (
            <div className="centered">
                <table className="rtable">
                    <thead>
                        <HeaderRow setSort={setSort} sortProps={sortProps} />

                    </thead>
                    <tbody>
                        {map(items, (item, key) => {
                            const rowProps = { key, item };
                            return (key >= offset && key < offset + range) ? <Row {...rowProps} /> : null;
                        })}
                    </tbody>
                </table>

                <div className="pages-container">
                    <Pagination
                        currentPage={currentPage}
                        backAction={this.back}
                        forwardAction={this.forward}
                    />
                </div>
            </div>
        );
    }
}

function mapStatsToProps(state) {

    const sortProps = state.sort;
    const { sortFn } = sortProps;

    const items = sortFn(state.items);

    return {
        items,
        sortProps: state.sort
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSort: bindActionCreators(actions.setSort, dispatch),
    };
}

Table.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        iD: React.PropTypes.int,
        firstName: React.PropTypes.string,
        lastName: React.PropTypes.string,
        birthDate: React.PropTypes.instanceOf(Date),
        company: React.PropTypes.string,
        note: React.PropTypes.int,
    })),
    sortProps: React.PropTypes.shape({
        reverse: React.PropTypes.bool,
        sortFn: React.PropTypes.func,
        property: React.PropTypes.string,
    }),
    setSort: React.PropTypes.func,
};

const TableContainer = connect(mapStatsToProps, mapDispatchToProps)(Table);

export {
    TableContainer,
    Table,
};