import React from "react";
import cn from 'classnames';
import * as PropTypes from "prop-types";

class ListGroup extends React.Component {
    render() {
        const { children } = this.props;
        const listGroupClass = cn('list-group');
        const listGroupItemClass = cn('list-group-item');

        function* idNumbers() {
            let x = 0;
            while (true) {
                yield ++x;
            }
        }
        const idNumber = idNumbers();

        return (
            <ul className={listGroupClass}>{
                children.map(item => {
                    return (
                        <li className={listGroupItemClass} key={idNumber.next().value}>{item}</li>
                    )
                })
            }</ul>
        )
    }
}

ListGroup.propTypes = {
    children: PropTypes.array.isRequired
}

export default ListGroup;