export function DocumentTitle(title) {
  if (title) {
    document.title = title;
  } else {
    document.title = "Procket";
  }
}

export function dateFormatter(stringDate) {
  let date = new Date(stringDate);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return `${y}-${m}-${d}`;
}
