import { createState, State, useState } from '@hookstate/core';
import { IAppSettings } from '../types';

const state = createState<IAppSettings>({
    isSidebarOpened: false,
});

export function useAppState(): State<IAppSettings> {
    return useState(state);
}
