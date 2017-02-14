// alert.js

var striped_lines_box = document.createElement('div');
striped_lines_box.style.cssText = "background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAwElEQVRYhcXYwQ3AIAwDwNBVuv9IzNJ+kKoiWkhiG74EnfjZKfWy8DlL/O2xRa1XFE6qFvtxXo3AENUNo1QfDFQdMFZdheHqEsxQ5zBJncA89Q+mqp8wWx3DAnUAa9QelqkvWKk+sFhtsF41s4SZUFNwMiUG4Xw2jcCQROyGUTncBwPTvwPGdo5VGN50lmBGv5rDpFY3gXld8u+S2mA/79m9eTwiaOuDKc2OoB+UbSZes8p9yDMu3sKULWqDt2ycbuQWUBgMCXBoAAAAAElFTkSuQmCC); height: 100%;width: 100%;position: fixed; z-index: 99999; opacity: 0.7;";

var inner_text = document.createElement('span');
inner_text.textContent = "Този сайт разпространява подвеждаща или невярна информация!";
inner_text.style.cssText = "font-family: 'Lucida Console', Monaco, monospace; color: white; margin: auto; background: black; display: block; height: 120px; width: 500px; text-align: center; font-size: 24px;";

striped_lines_box.appendChild(inner_text);

document.body.insertBefore(striped_lines_box, document.body.firstChild);
