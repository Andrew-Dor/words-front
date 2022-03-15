import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { REFRESH } from '../queries/auth/refresh.gql';

const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'include',
});

export const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError, forward, operation }) => {
            if (graphQLErrors) {
                graphQLErrors.forEach(async (err) => {
                    if (err.extensions.code === 'UNAUTHENTICATED') {
                        try {
                            // try update auth token with refresh token
                            const res = await client.query({
                                query: REFRESH,
                            });
                            if (res.data) {
                                forward(operation);
                            }
                        } catch (error) {
                            // eslint-disable-next-line no-console
                            console.log('unauthorized');
                        }
                    }
                });
            }

            // To retry on network errors, we recommend the RetryLink
            // instead of the onError link. This just logs the error.
            if (networkError) {
                // eslint-disable-next-line no-console
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        httpLink,
    ]),
    cache: new InMemoryCache(),
});
