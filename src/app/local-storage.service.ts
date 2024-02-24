import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

    // Set a value in local storage
    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }

    // Get a value from local storage
    getItem(key: string): string | null {
      let item = localStorage.getItem(key);
      return item != null ? JSON.parse(item) : {};
    }

    // Remove a value from local storage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

    // Clear all items from local storage
    clear(): void {
      localStorage.clear();
    }
}
