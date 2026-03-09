import React, { Component } from 'react';

class Card extends Component {
    render() {

        const { title, text } = this.props;

        return (
            <div className="card" style={{ margin: '20px', border: '1px solid #ddd', padding: '10px' }}>
                <div className="card-body">

                    {title && <h5 className="card-title">{title}</h5>}

                    {text && <p className="card-text">{text}</p>}
                </div>
            </div>
        );
    }
}

export default Card;