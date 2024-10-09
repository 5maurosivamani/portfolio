export function* getId() {
    let id = 1;
  
    while (true) {
      yield id;
      id++;
    }
  }
  