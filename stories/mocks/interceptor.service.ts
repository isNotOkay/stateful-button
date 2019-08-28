import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = this.determineMockFileUrl(req);

    const httpRequest = new HttpRequest(
      'GET',
      url,
    );
    req = Object.assign(req, httpRequest);
    req = req.clone();
    return next.handle(req);
  }

  private determineMockFileUrl(req: HttpRequest<any>): string {
    let url;
    if (req.url === 'login') {
      if (req.method === 'POST') {
        url = `login.json`;
      }
    } else if (req.url === 'users') {
      if (req.method === 'GET') {
        url = `users.json`;
      } else if (req.method === 'POST') {
        url = `created_user.json`;
      }
    }
    return url;
  }
}


