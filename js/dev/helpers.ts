

export const fetchData = async (url: string): Promise<Response> => {
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

export const execute = (callback: Function, ...args: any[]) => {
    if (!callback) return;
    callback(...args);
}

export const getImgPath = (filename: string) => {
    return window.location.origin + '/img/' + filename;
}
