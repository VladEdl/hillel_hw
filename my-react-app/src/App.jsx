import Definitions from './Components/Definitions.jsx';

import definitionsData from './Components/Data_for_definition_component.jsx';

function App() {
    return (
        <div className="App">
            <h1>List</h1>
            <Definitions items={definitionsData} />
        </div>
    );
}

export default App;