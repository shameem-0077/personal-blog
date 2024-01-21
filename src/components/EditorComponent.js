// EditorComponent.js
import React, { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import RawTool from '@editorjs/raw';
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
        console.log(editorRef,"editor ref")
    }

    
  }, [editorRef.current]);

  return <div className='bg-white h-[85vh] overflow-y-scroll text-black p-5 rounded-md' id="editorjs" />;
};

export default EditorComponent;

