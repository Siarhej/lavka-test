import { REQUEST_STATUS } from "./servers/requests";
import { RequestData } from "./types";

/**
 * У каждого компонента, в котором совершается запрос, есть стейт:RequestData, 
 * который хранит в себе текущее состояние запроса.
 * Эти три функции облегчают обработку стейта
 * 
 * handleErrorRequest - обрабатывает ошибку при запросе
 * handleSuccessRequest - обрабатывает успешное выполнение запроса
 * handlePendingRequest - обрабатывает запуск запроса
 */
export const handleErrorRequest = (dispatch: React.Dispatch<React.SetStateAction<RequestData>>, custom: RequestData = {}) => {
    dispatch({
        status: REQUEST_STATUS.error,
        data: null,
        msg: 'Произошла серверная ошибка',
        ...custom
    })
}

export const handleSuccessRequest = (dispatch: React.Dispatch<React.SetStateAction<RequestData>>, data: any, custom: RequestData = {}) => {
    dispatch({
        status: REQUEST_STATUS.success,
        data,
        msg: '',
        ...custom
    })
}

export const handlePendingRequest = (dispatch: React.Dispatch<React.SetStateAction<RequestData>>, custom: RequestData = {}) => {
    dispatch((prevState: RequestData) => ({
        ...prevState,
        status: REQUEST_STATUS.pending,
        ...custom
    }))
}

export const getClassPrefix = (className: string): string => {
    return 'app-' + className;
}

/**
 * Создает массив, длинна которого равна length.
 * Каждый элемент массива равен content
 */
export const createArray = (length: number, content: any = ''): any[] => {
    if (!length) return [];

    let result = [];
    let i = 0;

    while (i < length) {
        result.push(content);
        i++;
    }

    return result;
}


/**
 * Возвращает склоненное слово из words по отношению к number
 */
export const declOfNum = (number: number, words: string[]) => {
    const num = Math.abs(number) % 100;
    const num2 = num % 10;

    if (num > 10 && num < 20) return words[2];
    if (num2 > 1 && num2 < 5) return words[1];
    if (num2 === 1) return words[0];
    return words[2];
}


export const getFromSessionStorage = (key: string) => {
    let data: any;

    try {
        data = JSON.parse(sessionStorage.getItem(key));
    } catch (e) {
        data = null;
        console.error('Invalid parse.', key, e);
    }

    return data;
}


export const setToSessionStorage = (key: string, data: any) => {
    try {
        data = JSON.stringify(data);
    } catch (e) {
        data = null;
        console.error('Invalid stringify.', key, e);
    }

    if (!data) return;
    sessionStorage.setItem(key, data);
}