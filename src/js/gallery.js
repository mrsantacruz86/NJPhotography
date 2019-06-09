// Script to load the images
export function loadImages() {
  let $imgContainer = $('<div class="card-columns">');

  for (let i = 1; i < 22; i++) {
    const $card = $(`<div id="img-${i}" class="card">`)
    const $img = $('<img class="card-img-top">')
    $img.attr("src",`./gallery/img-${i}.jpg`);
    $img.appendTo($card);
    $card.appendTo($imgContainer);
  }
  return $imgContainer;
}