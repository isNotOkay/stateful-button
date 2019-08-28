import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  // Artificial delay to mimic loading latency.
  private readonly delay = 600;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = this.determineMockFileUrl(req);

    const httpRequest = new HttpRequest(
      // Always use GET here since we're retrieving static resources.
      'GET',
      url,
    );
    req = Object.assign(req, httpRequest);
    req = req.clone();
    return next.handle(req).pipe(
      delay(this.delay),
    );
  }

  /**
   * Helper for mapping URL and HTTP method combinations to corresponding JSON files.
   */
  private determineMockFileUrl(req: HttpRequest<any>): string {
    let url;
    if (req.url === 'login') {
      if (req.method === 'POST') {
        url = 'login';
      }
    } else if (req.url === 'users') {
      if (req.method === 'GET') {
        url = 'users';
      } else if (req.method === 'POST') {
        url = 'created_user';
      }
    }
    return `${url}.json`;
  }
}


