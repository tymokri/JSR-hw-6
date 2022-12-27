import React from "react";
import cn from 'classnames';

class ListGroup extends React.Component {
    render() {
        const { children } = this.props;

        const listGroupClass = cn(
            {
                'list-group': true
            });

        const listGroupItemClass = cn(
            {
                'list-group-item': true
            });

        return (<ul className={listGroupClass}>
            {React.Children.map(children, child => {
                return (
                    <React.Fragment key={1}>
                        <li className={listGroupItemClass}>{child}</li>
                    </React.Fragment>
                )
            })}
        </ul>);
    }
}

export default ListGroup;