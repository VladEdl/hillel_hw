import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        if (instanceRef.current) return;

        instanceRef.current = new Editor({
            el: editorRef.current,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            events: {
                change: () => {
                    const content = instanceRef.current.getMarkdown();
                    if (onContentChange) {
                        onContentChange(content);
                    }
                }
            }
        });

        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
                instanceRef.current = null;
            }
        };
    }, []);

    return <div ref={editorRef} />;
};

export default MarkdownEditor;