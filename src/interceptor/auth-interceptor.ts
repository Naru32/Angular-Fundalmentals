import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Interceptors works');
     const token = localStorage.getItem('Token');

  if (token) {
    const reqWithHeader = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${token}`
      )
    });

    return next(reqWithHeader);
  }

  return next(req);
};
