export const getTheme = (): string => {
    try {
        return localStorage.getItem('wordsTheme') ?? 'default';
    } catch (e) {
        return 'default';
    }
};

export const setTheme = (theme: string): boolean => {
    try {
        localStorage.setItem('wordsTheme', theme);

        return true;
    } catch {
        return false;
    }
};
