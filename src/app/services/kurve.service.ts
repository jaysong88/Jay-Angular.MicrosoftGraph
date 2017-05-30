import { Injectable } from '@angular/core';
import kurve = require('kurvejs');


@Injectable()
export class KurveService {
    private isAuthenticated: boolean = false;
    private name: string;

    constructor() {

    }

   public login() {

        const id = new kurve.Identity('e5c52a52-d4cb-41cd-8bdb-7eefa970e026',
        'http://localhost:3000/node_modules/kurvejs/dist/login.html', {endpointVersion: kurve.EndpointVersion.v1});

        id.loginAsync().then(_ => {
            this.isAuthenticated = true;
            const graph = new kurve.Graph(id);
            graph.me.GetUser().then(data => {
                this.name = data.displayName;
            });
        });

    }

  public getName() {
        return this.name;
    }


}
