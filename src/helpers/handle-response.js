import { authenticationService } from '../services/authentication-service';

export function handleResponse(response) {
  console.log('handleResponse');
  if (!response.headers.status === 200) {
    console.log('code: ', response.headers.status);
    if ([401, 403].indexOf(response.headers.status) !== -1) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      authenticationService.logout();
      window.location.reload();
    }

    if (response.error) {
      return Promise.reject(response.error);
    }
  }

  return response;
}
