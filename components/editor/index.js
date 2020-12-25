import React, { useEffect, useState } from 'react';
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import {
  ySyncPlugin,
  yCursorPlugin,
  yUndoPlugin,
  undo,
  redo,
  prosemirrorJSONToYDoc,
  prosemirrorToYDoc
} from 'y-prosemirror'
import { EditorState, Plugin } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { schema } from './schema.js'
import { updatePost } from "@graphql";
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { DOMParser } from 'prosemirror-model'
import {setupEditor, buildMenuItems} from './setup'
import tooltip from './tooltip'
import {Container} from './style'

function Editor({ _id }) {
  const [editorContent, setEditorContent] = useState("");
  const [updateThisPost] = useMutation(updatePost);

  useEffect(() => {
    // if (!_id) {
    //   console.log("not id")
    //   return;
    // }

    // window.addEventListener('load', () => {
      const ydoc = new Y.Doc();
      ydoc.on('update', (updateMessage, origin, doc) => {
        // console.log('update', updateMessage, origin, doc)
        // console.log(doc.toArray);
        // console.log(doc.clientID);
      })
      const provider = new WebsocketProvider('ws://18.222.170.161:1234', _id, ydoc)
      const type = ydoc.getXmlFragment('prosemirror')

      const editor = document.createElement('div')
      editor.setAttribute('id', 'editor')
      const editorContainer = document.createElement('div')
      editorContainer.insertBefore(editor, null);

      const prosemirrorView = new EditorView(editor, {
        state: EditorState.create({
          schema,
          plugins: [
            ySyncPlugin(type),
            tooltip({
              content: buildMenuItems(schema).floatingMenu
            }),
            yCursorPlugin(provider.awareness),
            yUndoPlugin(),
          ].concat(setupEditor({
            schema,
            menuBar: false, // turn off top menuBar
          }))
        }),
        handleKeyDown: (view, event) => {
          console.log('editorContent');
        },
        dispatchTransaction: transaction => {
          let newState = prosemirrorView.state.apply(transaction);
          // setEditorContent(JSON.stringify(newState.doc.content));
          prosemirrorView.updateState(newState);
          // console.log(JSON.stringify(newState.doc.content));
          // console.log(newState);
          console.log(_id);
          if (_id) {
            updateThisPost({
              variables: {
                id: _id,
                content: JSON.stringify(newState.doc.content),
                status: "live"
              }
            });
          }
          // const doc = prosemirrorJSONToYDoc(schema, {
          //     type: "doc",
          //     content: newState.doc.content.content
          // })
          // const ydoc = prosemirrorToYDoc(doc);
          // console.log("ydoc", ydoc);

        }
      });

      document.getElementById("editor-wrapper").appendChild(editorContainer, null)
    // });
  }, []);

  return (
    <Container>
      <div id="content"></div>
        <div id="editor-wrapper"></div>
    </Container>
  )
}

export default Editor;
