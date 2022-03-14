import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'include',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach((err) => {
            switch (err.extensions.code) {
                case 'UNAUTHENTICATED':
                    console.log('UNAUTHENTICATED');
                    // TODO: update cookie with refresh token
                    // Retry the request, returning the new observable
                    // return forward(operation);
                    break;
                default: {
                    console.log('GQL error', JSON.stringify(graphQLErrors));
                }
            }
        });
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const link = ApolloLink.from([errorLink, httpLink]);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});
