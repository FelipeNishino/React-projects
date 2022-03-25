import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://secure-macaque-48.hasura.app/v1/graphql',
    headers:{
        'x-hasura-admin-secret' : '2OmljUq5ROmfYSzCaoGmP39Dw3k0r5MEdD3JH34ul3HOqLuoPoSz4SiCus6Y38pZ'
    },
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root'));