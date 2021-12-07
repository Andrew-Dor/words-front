export const getTheme = () => {
    try {
        return localStorage.getItem('wordsTheme') ?? 'default';
    } catch (e) {
        return 'default';
    }
};

export const setTheme = (theme: string) => {
    try {
        localStorage.setItem('wordsTheme', theme);

        return true;
    } catch {
        return false;
    }
};
