import React from 'react';

const Definitions = ({ items }) => {
    return (
        <dl>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <dt>{item.dt}</dt>
                    <dd>{item.dd}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
};

export default Definitions;