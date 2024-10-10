export function* getId() {
    let id = 1;
  
    while (true) {
      yield id;
      id++;
    }
  }
  
  export function downloadFile(fileUrl, fileName) {
    const link = document.createElement('a');
    link.href = fileUrl; // The URL of the file
    link.download = fileName; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }