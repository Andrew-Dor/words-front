export interface IUser {
    name: string;
    email: string;
}

export type TElementSize = 'small' | 'medium' | 'large';

export type TComponentState = 'primary' | 'success' | 'error' | 'warning';

export interface INavbarMenuItem {
    id: string;
    title: string;
    action: () => void;
}
