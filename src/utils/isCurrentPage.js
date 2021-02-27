const isCurrentPage = (router, url) => {
  if (router === url || router.indexOf(url.toString().substring(1)) > 0) {
    return true;
  }
  return false;
};

export default isCurrentPage;
