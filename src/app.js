/**
 * Created by jorgeayala on 23/03/2017.
 */

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Chart from './Chart';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {percentComplete: 0.3};
        this.togglePercent = this.togglePercent.bind(this);
    }

    togglePercent() {
        const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
        this.setState({percentComplete: percentage});
    }

    render() {
        var data = [
            { apples: 53245, oranges:	200 },
            { apples: 28479, oranges:	200 },
            { apples: 19697, oranges:	200 },
            { apples: 24037, oranges:	200 },
            { apples: 40245, oranges:	200 }
        ];

        return (
            <div>
                <div className="App-header">
                    Welcome to BrainMaps.io the Search UI for Competency Frameworks!
                </div>

                <SearchBar />

                <Chart data={data} />

            </div>
        );
    }
}

export default App;