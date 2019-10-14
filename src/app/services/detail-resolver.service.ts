import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailResolverService implements Resolve<any> {
  constructor(private http: HttpClient, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    console.log(id);
    return this.http.get('https://api.openbrewerydb.org/breweries/' + id, {
      // params: new HttpParams(data)
    });
    // throw new Error('Method not implemented.');
  }

}
