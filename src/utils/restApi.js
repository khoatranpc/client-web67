import httpClient from "./axios";

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
const doRequest = (uri, method, action) => {
    let response;
    switch (method) {
        case METHOD.GET:
            response = httpClient.get(uri).then(rs => {
                return rs
            }).catch(err => {
                return err
            });
    }
    return response;
};
export default doRequest;