import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserSecret } from '../consts/security.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  get isLoggedIn(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem(UserSecret);
      return user
    } else {
      return null
    }
  }

  setUser(username: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(UserSecret, username)
    }
  }
}
