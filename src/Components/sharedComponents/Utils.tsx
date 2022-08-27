export const toLocalDate = (date: string) => {
    const d = new Date(date).toLocaleDateString('fa-ir');
    return d;
}

export const getDateTooltip = (date: string) => {
    const d = new Date(date).toLocaleTimeString('fa-ir');
    return d;
}

export const isAuth = () => {
    if(window.localStorage.getItem('auth-token') !== null)
        return true;
    else
        return false;
}