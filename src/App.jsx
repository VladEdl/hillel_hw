import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor/MarkdownEditor';

function App() {
    const [content, setContent] = useState('');

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className="App">
            <MarkdownEditor onContentChange={handleContentChange} />
            <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd' }}>
                <h3>Markdown Output:</h3>
                <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
            </div>
        </div>
    );
}

export default App;