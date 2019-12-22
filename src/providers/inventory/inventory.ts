import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Inventory {
    inventory: any;

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('api/inventory', params);
    }

    add(inventory) {
        return this.api.post('api/inventory', inventory);
    }

    update(inventory) {
        return this.api.put('api/inventory', inventory);
    }

}

