import React from 'react';
import Card from './card.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>My Projects</h1>
                <Card />
            </div>
        );
    }
}

export default App;