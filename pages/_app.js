import 'antd/dist/antd.css';
import { useStore } from '../store'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  split,
  ApolloLink
} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { HttpLink } from "apollo-link-http";
import * as ws from 'ws';
import { getMainDefinition } from 'apollo-utilities';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { WebSocketLink } from 'apollo-link-ws';
// import ApolloClient from 'apollo-client';

// const link = createHttpLink({
//   uri: 'http://localhost:8000/pg?',
//   // credentials: 'same-origin'
// });

const wsLink = new WebSocketLink({
  uri: `ws://52.15.92.232/:5000/graphql`,
  options: {
    reconnect: true
  },
  webSocketImpl: ws
});

const httpLink = new BatchHttpLink({
  uri: "http://52.15.92.232/:4000",
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
    src: url("/ProximaNova-Bold.otf");
  }
  @font-face {
    font-family: ProximaNovaSemiBold;
    src: url("/ProximaNova-Semiibold.otf");
  }
  body {
    font-family: ProximaNova,Open-Sans, Helvetica, Sans-Serif;
    background: #E5E5E5;
  }
  .ant-tooltip-inner {
    color: #000 !important;
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
