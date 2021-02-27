const pageOffset = (setShowBar, setBarBg) => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
    if (currentScrollPos > 60) setBarBg(true);
    else setBarBg(false);
    prevScrollpos = currentScrollPos;
  };
};
export default pageOffset;
