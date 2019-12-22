import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Notifications {
    notifications: any;

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('api/notifications', params);
    }

    add(notifications) {
        return this.api.post('api/notifications', notifications);
    }

    update(notifications) {
        return this.api.put('api/notifications', notifications);
    }

}

