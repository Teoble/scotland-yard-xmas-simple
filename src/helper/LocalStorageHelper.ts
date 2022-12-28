export function setToLocalStorage(key: string, object: any) {
  window.localStorage.setItem(key, JSON.stringify(object))
}

export function getFromLocalStorage(key: string): any {
  return JSON.parse(window.localStorage.getItem(key) || '{}')
}
