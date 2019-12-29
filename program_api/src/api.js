const basicAuth = 'Basic '+btoa('admin:district');

const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});


class Api {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

    getProgram = id => {
        return fetch(`${this.config.baseUrl}/programs/${id}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getProgramThatStartsWith = str => {
        const fields = 'id,displayName';
        const filter = `displayName:startsWith:${str}`;
        const parameters = `fields=${fields}&filter=${filter}&paging=false`;

        return fetch(`${this.config.baseUrl}/programs`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    
}

export default new Api();
