export const urlToDisplay = (url: string) => url.match(/https*:\/\/(www.)*([^/]+).*$/i)?.[2];
