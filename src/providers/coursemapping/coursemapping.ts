import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class CourseMapping {
    priceMapping: any;

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('api/pricemapping', params);
    }

    add(priceMapping) {
        return this.api.post('api/pricemapping', priceMapping);
    }

    update(priceMapping) {
        return this.api.put('api/pricemapping', priceMapping);
    }

}

