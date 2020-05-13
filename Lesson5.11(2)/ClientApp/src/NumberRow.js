import React from 'react';

class NumberRow extends React.Component {
    render() {
        const { number, onSelectClick, addRemove } = this.props;
        return (
            <tr>
                <td>{number}</td>
                <td><button onClick={onSelectClick} className='btn btn-success'>{addRemove()}</button></td>
            </tr>
        )
    }
}
export default NumberRow;