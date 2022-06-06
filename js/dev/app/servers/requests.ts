import { fetchData } from "../../helpers";
import { RequestStatus } from "../types";
import { AJAX_PRODUCT, AJAX_PRODUCT_REVIEWS } from "./actions";


export const getAjaxData = async (action: string): Promise<Response> => {
    let url = URL_STATE[action];
    return fetchData(url);
}

export const REQUEST_STATUS: RequestStatus = {
    error: 'error',
    pending: 'pending',
    success: 'success'
}

const AJAX_PATH = 'https://rest.bellavka.by/api/v1/';

const URL_STATE = {
    [AJAX_PRODUCT]: getUrl('products/57791673?include=brand,category,collections,colors,fabrics,heights,kits,season,sizes,photos,videos,styles'),
    [AJAX_PRODUCT_REVIEWS]: getUrl('feedbacks?type=review&product=57791673&include=answers,characteristics'),
}

function getUrl(url: string) {
    return AJAX_PATH + url;
}


