import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class PostOrder {
    postorder: any;

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('api/postorder', params);
    }

    add(postorder) {
        return this.api.post('api/postorder', postorder);
    }

    update(postorder) {
        return this.api.put('api/postorder', postorder);
    }

}

