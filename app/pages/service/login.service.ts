import {Injectable} from 'angular2/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
    
    private loginUrl: string = "http://23.96.176.134:3001/api/users/Token";
    constructor(private http: Http) { 

    }
    
    Login(username, password) {
      let body = JSON.stringify({username: username, password: password});
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
      return this.http.post(this.loginUrl, body, options)
               .map(res => res.json())
               .do(res => { 
                        console.log(res);
                   });

  }
}