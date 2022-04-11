import { convertFromHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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

function TextEditor() {
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(convertFromHTML('Thay đổi nội dung tại đây...'))
    );

    // const onEditorStateChange = (newEditorState) => {
    //     setEditorState(newEditorState);
    // };

    return (
        <div>
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
        </div>
    );
}

export default TextEditor;

// export default class TextEditor extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         editorState: EditorState.createWithContent(convertFromHTML('Gõ nội dung tại đây!'))
//     //     };
//     //     // this.onEditorStateChange = this.onEditorStateChange.bind(this);
//     // }

//     state = {
//         editorState: EditorState.createWithContent(convertFromHTML('Gõ nội dung tại đây!'))
//     };

//     onEditorStateChange(editorState) {
//         this.setState({
//             editorState,
//         });
//         var contentRaw = convertToRaw(this.state.editorState.getCurrentContent());
//         var contentHTML = convertToHTML(this.state.editorState.getCurrentContent());
//         console.log('contentHTML =', contentHTML);
//         localStorage.setItem('draftRaw', JSON.stringify(contentRaw));
//         this.props.handleContentChange(contentRaw);
//     }

//     componentWillUnmount() {
//         this.setState({ editorState: {} });
//     }

//     render() {
//         const { editorState } = this.state;
//         return (
//             <Box className='editor'
//                 sx={{
//                     '& .rdw-editor-toolbar': {
//                         border: `1px solid ${grey[400]}`,
//                         borderRadius: 1
//                     }
//                 }}
//             >
//                 <Editor
//                     editorState={editorState}
//                     onEditorStateChange={this.onEditorStateChange}
//                     toolbar={{
//                         inline: { inDropdown: true },
//                         list: { inDropdown: true },
//                         textAlign: { inDropdown: true },
//                         link: { inDropdown: true },
//                         history: { inDropdown: true },
//                         image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
//                     }}
//                 />
//             </Box>
//         );
//     }
// }