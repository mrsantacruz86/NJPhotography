import '../css/main.scss';
import jquery from 'jquery';
window.$ = jquery;
import { getGif } from './api';
import {loadImages} from './gallery';
// import "bootstrap";

// jQuery methods
$(function () {
  // handle nav-link active
  $('.nav li').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
  $('.nav li').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  })

  //add year to the copyright
  $(function () { $("#crYear").text(new Date().getFullYear()) });

  //handle button click event
  $("#alert-btn").on("click", () => {
    getGif("dog")
      .then(res => {
        const src = res.data.images.fixed_height.url;
        const $imgDisplay = $('<div class="img-display">');
        $imgDisplay.append($(`<img src="${src}">`))
        $("#root").append($imgDisplay);
      })
      .catch(err => console.log(err));
  })

  // Toggle sidePanel
  $('.burgerBtn').on("click", () => {
    $(".sidePanel").toggleClass("sidePanel-open");
    $(".burgerBtn").toggleClass("change");
  });

  // Load images to gallery
  // $('#gallery').append(loadImages());

});




