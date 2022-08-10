const shortMovieFilter = (arr, isShort) => {
  return arr.filter((item) => {
    if (isShort) {
      return item.duration < 40;
    }
    return item;
  });
};

const compare = (item, request) => {
  if (typeof item === "string") {
    return item.toLowerCase().includes(request.toLowerCase());
  }
};

const moviesFilter = (arr, isShort, ...requests) => {
  return shortMovieFilter(arr, isShort).filter((item) => {
    return requests.every((req) => {
      return Object.values(item).some((str) => compare(str, req));
    });
  });
};

//const request = strReq.split(/[\s,.-]+/);

export default moviesFilter;