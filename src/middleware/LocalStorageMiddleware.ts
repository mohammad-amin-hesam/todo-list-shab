// LocalStorageMiddleware.ts
class LocalStorageMiddleware {
    storageKey: string;
  
    constructor(storageKey: string) {
      this.storageKey = storageKey;
    }
  
    // Load state from localStorage
    loadState(): any {
      try {
        const serializedState = localStorage.getItem(this.storageKey);
        if (serializedState === null) {
          return undefined;
        }
        return JSON.parse(serializedState);
      } catch (error) {
        console.error('Error loading state from localStorage:', error);
        return undefined;
      }
    }
  
    // Save state to localStorage
    saveState(state: any): void {
      try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(this.storageKey, serializedState);
      } catch (error) {
        console.error('Error saving state to localStorage:', error);
      }
    }
  }
  
  export default LocalStorageMiddleware;
  