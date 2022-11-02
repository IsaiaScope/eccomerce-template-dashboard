import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  static get(varName: string) {
    const value = localStorage.getItem(varName);
    return value && JSON.parse(value);
  }

  static set(valueName: string, value: boolean) {
    localStorage.setItem(valueName, JSON.stringify(value));
  }

  static remove(itemName: string) {
    localStorage.removeItem(itemName);
  }
}
