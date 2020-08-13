import { INVOICES } from '../shared/invoices';
import { SERVICES } from '../shared/services';

export const initialState = {
    invoices: INVOICES,
    services: SERVICES
};

export const Reducer = (state = initialState, action) => {
    return state;
}