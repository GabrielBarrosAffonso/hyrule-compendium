export function sortListByName(a: any, b: any){
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

export function sortListByID(a: any, b: any){
  if (a.id < b.id) {
      return -1;
  }
  if (a.id > b.id) {
      return 1;
  }
  return 0;
}