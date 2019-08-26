import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyHttpClientService {

  constructor() {
  }

  get(): Observable<HttpResponse<any>> {
    console.log('=== GETTTT ===');
    return of(new HttpResponse({
      body: {test: 'test'},
    }));
  }
}
