// EditorComponent.js

import React, { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import RawTool from '@editorjs/raw';
import ImageTool from '@editorjs/image';
import SimpleImage from "@editorjs/simple-image";
import Code from "@editorjs/code";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";



const EditorComponent = ({ setSave, readOnly, data }) => {
  const editorRef = useRef(null);
  const [saveData, setSaveData] = useState({})

  const handleSave = () => {
    editorRef.current.save().then((outputData) => {
        console.log('Article data: ', outputData)
        setSaveData(outputData)
        setSave(outputData)
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    }

    const initEditor = () => {
        const editor = new EditorJS({
          // Your Editor.js configuration goes here
          // See Editor.js documentation for available options
          placeholder: 'Let`s write an awesome story!',
          holder: 'editorjs',
          readOnly: readOnly,
          onChange: (api, event) => {
            console.log('Now I know that Editor\'s content changed!', event)
            handleSave()
          },
          tools: {
            header: Header,
            raw: RawTool,
            image: {
                class: SimpleImage,
                inlineToolbar: true,
            },
            code: Code,
            table: Table,
            quote: Quote,
            embed: Embed,
            list: {
                class: List,
                inlineToolbar: true, // or ['bold', 'link']
            },
            delimiter: Delimiter,
            inlineCode: InlineCode,
            marker: Marker,
          },
          inlineToolbar: ['link', 'bold', 'italic'],
          data: data
        });
    
        editorRef.current = editor;

    }

   

  useEffect(() => {
    if (!editorRef.current) {
        initEditor();
    }

    
  }, [editorRef.current]);

  return <div className='bg-white h-[85vh] overflow-y-scroll text-black p-5 rounded-md' id="editorjs" />;
};

export default EditorComponent;
// import React, { useContext, useEffect, useRef, useState } from "react";
// // import { imageUploadConfig } from "../../../axiosConfig";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import ImageTool from "@editorjs/image";
// import Code from "@editorjs/code";
// import List from "@editorjs/list";
// import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
// import Delimiter from "@editorjs/delimiter";
// import Quote from "@editorjs/quote";
// import InlineCode from "@editorjs/inline-code";
// import Marker from "@editorjs/marker";
// // import { Context } from "../../contexts/Store";


// function EditorComponent({
  
// }) {
//     const ejInstance = useRef();
//     const editorInstanceRef = useRef(null);
   
//     const initEditor = () => {
//         const editor = new EditorJS({
//             holder: "editorjs",
//             data: {},
//             readOnly: true,
//             onReady: () => {
//                 ejInstance.current = editor;
//             },
//             // autofocus: true,
//             onChange: async () => {
//                 let content = await editor.save(); // Change 'editor.saver.save()' to 'editor.save()'
//                 setEditorContent(content);
//                 if (isDraft === false) {
//                     setDraft(true);
//                 }
//             },
//             tools: {
//                 header: Header,
//                 // image: {
//                 //     class: ImageTool,
//                 //     config: {
//                 //         endpoints: {
//                 //             byFile: `${'abc'}${article_pk}/`,
//                 //             byUrl: "api/v1/tech-updates/fetch-image",
//                 //         },
//                 //         additionalRequestHeaders: {
//                 //             Authorization: `Bearer ${'dd'}`,
//                 //         },
//                 //     },
//                 // },
//                 // code: Code,
//                 table: Table,
//                 quote: Quote,
//                 embed: Embed,
//                 list: {
//                     class: List,
//                     inlineToolbar: true, // or ['bold', 'link']
//                 },
//                 delimiter: Delimiter,
//                 inlineCode: InlineCode,
//                 marker: Marker,
//             },
//         });
//         editorInstanceRef.current = editor;
//     };

//     useEffect(() => {
//         if (!editorInstanceRef.current) {
//             initEditor();
//         }
//     }, [editorInstanceRef.current]);

//     return (
//         <>
//             <div className="bg-white h-[85vh]" id="editorjs" />
//         </>
//     );
// }

// export default EditorComponent;
