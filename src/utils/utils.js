export function DocumentTitle(title) {
    if (title){
      document.title =title
    }
    else{
      document.title = "Procket";
    }
}

export function timestampToDate(timestamp) {
  let date = new Date(timestamp);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return `${m}/${d}/${y}`;
}

