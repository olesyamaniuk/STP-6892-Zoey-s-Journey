$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery__button--left',
    nextArrow: '.gallery__button--right',
  });
});

$(function () {
  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    // centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery__button--left',
    nextArrow: '.reviews__button--right',
  });
});
