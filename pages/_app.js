import 'antd/dist/antd.css';
import { useStore } from '../store'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  ApolloLink
} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import * as ws from 'ws';
import { getMainDefinition } from 'apollo-utilities';


const wsLink = new WebSocketLink({
  uri: `ws://18.222.170.161:5000/graphql`,
  options: {
    reconnect: true
  },
  webSocketImpl: ws
});

const httpLink = new BatchHttpLink({
  uri: "http://18.222.170.161:4000",
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([splitLink]),
});


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ProximaNova;
    src: url("/fonts/ProximaNova-Regular.otf");
  }
  @font-face {
    font-family: ProximaNovaBold;
    src: url("/fonts/ProximaNova-Bold.otf");
  }
  @font-face {
    font-family: ProximaNovaSemiBold;
    src: url("/fonts/ProximaNova-Semiibold.otf");
  }
  body {
    font-family: ProximaNova,Open-Sans, Helvetica, Sans-Serif;
    background: #F0EFE9;
  }
  .ant-layout {
    background: inherit;
  }
  .ant-tooltip-inner {
    color: #000 !important;
  }
  
  // we will move ProseMirror class later.   
  #editor-container #title{
    line-height: 44px;
  }
  
  .ProseMirror-prompt {
    position: fixed;
    background: #ffffffa6;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ProseMirror-prompt form {
    max-width: 400px;
    width: 100%;
  }
  
  .ProseMirror-prompt h5 {
    margin: 0;
    font-weight: normal;
    font-size: 100%;
    color: #444;
  }
  
  .ProseMirror-prompt input[type="text"],
  .ProseMirror-prompt textarea {
    background: #eee;
    border: none;
    outline: none;
  }
  
  .ProseMirror-prompt input[type="text"] {
    padding: 0;
    width: 100%;
    background: transparent;
    font-size: 24px;
  }
  
  .ProseMirror-prompt code{
    font-size: 14px;
    color: #696969;
  }
  
  .ProseMirror-prompt-close {
    position: absolute;
    left: 2px;
    top: 1px;
    color: #666;
    border: none;
    background: transparent;
    padding: 0;
  }
  
  .ProseMirror-prompt-close:after {
    content: "✕";
    font-size: 12px;
  }
  
  .ProseMirror-invalid {
    background: #ffc;
    border: 1px solid #cc7;
    border-radius: 4px;
    padding: 5px 10px;
    position: absolute;
    min-width: 10em;
  }
  
  .ProseMirror-prompt-buttons {
    margin-top: 5px;
    display: none;
  }
`;

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )

}

export default MyApp;
