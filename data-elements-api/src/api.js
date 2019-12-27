const basicAuth = 'Basic '+btoa('admin:district'); 

const headers = new Headers({
    'Authorization' : basicAuth,
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

    getDataElement = id => {
        return fetch(`${this.config.baseUrl}/dataElements/${id}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getDataElementsThatStartsWith = str => {
        const fields = 'id,displayName';
        const filter = `displayName:startsWith:${str}`;
        const parameters = `fields=${fields}&filter=${filter}&paging=false`;

        return fetch(`${this.config.baseUrl}/dataElements`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
           .catch(error => error)
            .then(response => response.json()); 
    };

    deleteDataElement = id => {
        return fetch(`${this.config.baseUrl}/dataElements/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
            headers,
        });
    };
}

export default new Api();
