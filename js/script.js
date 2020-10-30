// $('.nav__ul--wrapper a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 800);
//   };
// })

var scroll = new SmoothScroll('.nav__ul--wrapper a[href*="#"]', {
  speed: 800
});