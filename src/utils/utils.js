export function DocumentTitle(title) {
  if (title) {
    document.title = title;
  } else {
    document.title = "Procket";
  }
}

export function dateFormatter(stringDate) {
  return stringDate.split(" ")[0];
}
