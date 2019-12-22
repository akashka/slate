import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Passbook {
    passbook: any;

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('api/passbook', params);
    }

    add(passbook) {
        return this.api.post('api/passbook', passbook);
    }

    update(passbook) {
        return this.api.put('api/passbook', passbook);
    }

}

