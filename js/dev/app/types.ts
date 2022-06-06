export type RequestStatus = {
    error: 'error';
    pending: 'pending';
    success: 'success';
}

export type RequestData = {
    status?: keyof RequestStatus | ''; // статус запроса
    data?: any; // Данные с запроса
    msg?: string; // Сообщение для вывода клиенту
}

