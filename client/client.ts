import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
    // uri: 'https://meta-spirit-357111.lm.r.appspot.com/'
    uri: 'http://localhost:8080/'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            "x-access-token": token ? token : '',
            'involved-party-id': id
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(restLink),
    cache: new InMemoryCache()
});


export const initClient = () => {
    const restLink = new RestLink({
        // uri: 'https://meta-spirit-357111.lm.r.appspot.com/'
        uri: 'http://localhost:8080/'
    });

    const authLink = setContext((_, { headers }) => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
                "x-access-token": token ? token : '',
                'involved-party-id': id
            }
        }
    });
    return new ApolloClient({
        link: authLink.concat(restLink),
        cache: new InMemoryCache()
    })
}

export default client