import {store} from './store';


class response_object {
    constructor(err, status, data){
        this.err = err;
        this.status = status;
        this.data = data;
    }
}

function get_url(path){
    if(!path.startsWith("/")){
        path = "/" + path;
    }
    return store.config.api_url + path
}

async function api_get(url){
    let res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
        }
    });

    let send_res = new response_object(res.statusText, res.status, null)
    if(res.status == 200){
        send_res.data = await res.json();
    }

    return send_res;
}

async function api_post(url, data){
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify(data)
    });

    let send_res = new response_object(res.statusText, res.status, null)
    if(res.status == 200){
        send_res.data = await res.json();
    }

    return send_res;
}

let functions = {
    api_get,
    api_post,
    get_url
}

export default functions;