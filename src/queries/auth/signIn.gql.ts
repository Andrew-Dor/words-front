import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    query signIn($email: String!, $password: String!) {
        signIn(params: { email: $email, password: $password }) {
            email
            name
            role
        }
    }
`;
