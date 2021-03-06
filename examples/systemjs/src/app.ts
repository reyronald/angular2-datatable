import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {DatePipe} from "angular2/common";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {DataTableDirectives} from 'angular2-datatable/datatable';


@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})
export class App {

    private data = [];

    constructor(private http: Http) {
        http.get("/src/data.json")
            .subscribe((data)=>{
                this.data = data.json();
            });
    }

    private toInt(num:string) {
        return +num;
    }

}

bootstrap(App);