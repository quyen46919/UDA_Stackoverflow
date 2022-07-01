import { Box } from '@mui/material';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import PropTypes from 'prop-types';

TextEditor.propTypes = {
    handleContentChange: PropTypes.func.isRequired
};

function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_DOC_NAME}/image/upload`);
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                var data = JSON.parse(xhr.responseText);
                var response = { data:  { link: data.secure_url } };
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );
}

function TextEditor(props) {
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(convertFromHTML('Thay đổi nội dung tại đây...'))
    );
    const { handleContentChange } = props;

    // const onEditorStateChange = (newEditorState) => {
    //     setEditorState(newEditorState);
    // };

    useEffect(() => {
        handleContentChange(convertToHTML(editorState.getCurrentContent()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorState]);

    return (
        <Box sx={{
            '& span': { color: 'text.primary' }
        }}>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
                }}
            />
        </Box>
    );
}

export default TextEditor;