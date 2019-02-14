import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Instructor {
    instructor: any;

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('instructor', params);
    }

    add(instructor) {
        return this.api.post('instructor', instructor);
    }

    update(instructor) {
        return this.api.put('instructor', instructor);
    }

}
