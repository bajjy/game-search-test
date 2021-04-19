export function fetchStores(stores) {
    return {
        type: 'FETCH_STORES',
        stores
    }
};
export function spinner(spinner) {
    return {
        type: 'SPINNER',
        spinner
    }
};