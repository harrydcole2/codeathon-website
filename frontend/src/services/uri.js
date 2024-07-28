export function UriSafe(strings, ...toEncode) {
  return strings.reduce((acc, val) => {
    return acc + val + encodeURIComponent(toEncode.splice(0, 1) || "");
  }, "");
}

export function ObjectToQueryString(obj) {
  var str = [];

  for (var p in obj)
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      if (obj[p] !== undefined && obj[p] !== null && obj[p] !== "") {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
  return str.join("&");
}
