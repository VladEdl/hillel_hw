import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h1>React Homework: Task 2 (Props)</h1>

                <Card title="Тільки заголовок" />

                <Card text="Тут передано лише опис без заголовка." />

                <Card
                    title="Повний комплект"
                    text="Ця картка має і заголовок, і основний текст."
                />
            </div>
        );
    }
}

export default App;