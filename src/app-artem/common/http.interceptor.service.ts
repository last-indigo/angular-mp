import { ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizedHttp extends Http {
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions
  ) {
    super(backend, defaultOptions);
    console.log('AuthorizedHttp constructor');
  }
}

console.log('AuthorizedHttp', AuthorizedHttp);
