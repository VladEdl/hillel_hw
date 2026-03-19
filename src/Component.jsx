import {useState} from 'react';

const Component = () => {
    const [logs, setLogs] = useState([]);

    const handleAdd = (type) => {
        setLogs((prevLogs) => {
            const lastValue = prevLogs.length > 0 ? prevLogs[0].value : 0;

            const newValue = type === 'plus' ? lastValue + 1 : lastValue - 1;

            const newEntry = { id: Date.now(), value: newValue };

            return [newEntry, ...prevLogs];
        });
    };

    const handleDelete = (id) => {
        setLogs((prevLogs) => prevLogs.filter(log => log.id !== id));
    };


    return (
        <div className="container">
            <div className="buttons">
                <button onClick={() => handleAdd('plus')}>+</button>
                <button onClick={() => handleAdd('minus')}>-</button>
            </div>

            <div className="log">
                {logs.map((log) => (
                    <div
                        key={log.id}
                        className="log-item"
                        onClick={() => handleDelete(log.id)}
                    >
                        {log.value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component;