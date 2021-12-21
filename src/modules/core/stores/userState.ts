import { createState, State, useState } from '@hookstate/core';
import { IUser } from '../types';

const getUser = async (): Promise<IUser> => {
    // TODO: try auth user
    return {
        email: 'test@test.com',
        name: 'test',
    };
};

const state = createState<IUser>(getUser);

export function useUserState(): State<IUser> {
    return useState(state);
}
