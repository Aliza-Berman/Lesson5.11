import React from 'react';
import NumberRow from './NumberRow';

class NumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: []
    }
    onAddClick = () => {
        const numbers = [...this.state.numbers, Math.floor(Math.random() * 10000) + 1];
        this.setState({ numbers });
    }
    onSelectClick = number => {
        if (this.addRemove(number) === 'Add') {
            const selectedNumbers = [...this.state.selectedNumbers, number];
            this.setState({ selectedNumbers });
        }
        else {
            const selectedNumbersCopy = [...this.state.selectedNumbers];
            const selectedNumbers = selectedNumbersCopy.filter(n => n !== number);
            this.setState({ selectedNumbers });
        }

    }
    addRemove = number => {
        if (this.state.selectedNumbers.includes(number)) {
            return 'Remove'
        }
        return 'Add';
    }
    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <div className='container' style={{ marginBottom: 20 }}>
                    <button className='btn btn-primary' onClick={this.onAddClick}>Add Number</button>
                </div>
                <table className="table table-hover table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((n, i) =>
                            <NumberRow key={i} number={n}
                                onSelectClick={() => this.onSelectClick(n)}
                                addRemove={() => this.addRemove(n)} />
                        )}
                    </tbody>
                </table >
                <br />
                <h5>Selected</h5>
                <ul>
                    {this.state.selectedNumbers.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
            </div >
        );
    }
}
export default NumberTable;