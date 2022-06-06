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
