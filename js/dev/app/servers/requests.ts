import { fetchData } from "../../helpers";
import { AJAX_PRODUCT, AJAX_PRODUCT_REVIEWS } from "./actions";

interface UrlState {
    [AJAX_PRODUCT]: string;
    [AJAX_PRODUCT_REVIEWS]: string;
}

export const getAjaxData = async <K extends keyof UrlState>(action: K): Promise<Response> => {
    let url = URL_STATE[action];
    return fetchData(url);
}

const AJAX_PATH = 'https://rest.bellavka.by/api/v1/';

const URL_STATE: UrlState = {
    [AJAX_PRODUCT]: getUrl('products/57791673?include=brand,category,collections,colors,fabrics,heights,kits,season,sizes,photos,videos,styles'),
    [AJAX_PRODUCT_REVIEWS]: getUrl('feedbacks?type=review&product=57791673&include=answers,characteristics'),
}

function getUrl(url: string) {
    return AJAX_PATH + url;
}


