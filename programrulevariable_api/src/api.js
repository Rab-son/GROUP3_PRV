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

    getProgramRuleVariable = id => {
        return fetch(`${this.config.baseUrl}/programRuleVariables/${id}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getProgramRuleVariablesThatStartsWith = str => {
        const fields = 'id,displayName';
        const filter = `displayName:startsWith:${str}`;
        const parameters = `fields=${fields}&filter=${filter}&paging=false`;

        return fetch(`${this.config.baseUrl}/programRuleVariables`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };
    

    postProgramRuleVariable = programRuleVariable => {
        return fetch(`${this.config.baseUrl}/programRuleVariables`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers,
            body: JSON.stringify(programRuleVariable ),
        });
    };

    deleteProgramRuleVariable = id => {
        return fetch(`${this.config.baseUrl}/programRuleVariables/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors',
            headers,
        });
    };
}

export default new Api();
