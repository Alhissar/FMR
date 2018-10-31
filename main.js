const names = ['proses', 'poesies', 'nondit'];
const divs = {};
const $rubriques = document.querySelector('.rubriques');
const $box = document.getElementById('box');
const $inbox = document.getElementById('inbox');
const $excerptClose = document.getElementById('excerpt-close');
let firstY;
const rubriques = {
  abs: false,
  clicked: '',
  height: 0,
  top,
  allVisible() {
    $box.style.opacity = '';
    names.forEach(name => {
      divs[name].style.opacity = 1;
      divs[name].style.zIndex = '';
    });
  },
  getHeight() {
    let height = 0;
    if (!this.isPhone()) {
      height = box(divs.proses).height;
    } else {
      const parent = document.getElementById('box-rubriques').getBoundingClientRect();
      height = parent.height - ( 0.04 * parent.width);
    }
    return height;
  },
  isPhone() {
    const cssCheck = window.getComputedStyle(document.querySelector('.header .bandeau'));
    const positionCheck = cssCheck.getPropertyValue('position');
    return (positionCheck === 'relative') ? true : false;
  },
  refresh(anim) {
    $box.style.transition = (anim) ? '' : '0s';
    if (rubriques.abs && this.isPhone()) $rubriques.style.height = 0;
    const rubHeight = box(divs.proses).height;
    const rubWidth = box(divs.proses).width;
    let space = 0;
    if (this.isPhone()) {
      space = this.getHeight() - rubHeight * 3;
      space = space < 0 ? 0 : space / 6;
    } else {
      space = (box($rubriques).width - rubWidth * 3) / 6;
    }
    // udapte rubriques > divs
    names.forEach((name, i) => {
      if (this.isPhone()) {
        // version mobile
        this[name] = {
          left: 0,
          top: rubHeight * i + space * (2 * i + 1)
        };
        if (rubriques.clicked) {
          this[name].top = space;
        }
      } else {
        // version desktop
        this[name] = {
          left: rubWidth * i + space * (2 * i + 1),
          top: 0
        };
        if (this.clicked) {
          this[name].left = space;
        }
      }
      divs[name].style.left = this[name].left + 'px';
      divs[name].style.top = this[name].top + 'px';
    });

    // update box
    let boxHeight = 0;
    // 0.035 = valeur de $box.paddingLeft
    const padding = box($rubriques).width * 0.035;
    $excerptClose.style.left = `${padding}px`;
    if (this.isPhone()) {
      // animation verticale (mobile)
      $box.style.left = 0;
      $box.style.top = `${rubHeight + space}px`;
      boxHeight = this.getHeight() / 1.55;
      $inbox.style.height = `${this.getHeight() / 1.55}px`; // ?
      if (this.clicked) {
        $box.style.top = `${rubHeight + space}px`;
      } else {
        $box.style.top = `${boxHeight + this.getHeight() / 1.55}px`;
      }
    } else {
      // animation horizontale (desktop)
      boxHeight = this.getHeight();
      $box.style.top = '-7%';
      $inbox.style.height = `${this.getHeight()}px`;
      if (this.clicked) {
        $box.style.left = `${rubWidth + space}px`;
      } else {
        $box.style.left = `${box($box).width + rubWidth + space}px`;
      }
    }

    if (!this.abs) return;
    if (this.getHeight() < boxHeight + rubHeight && this.isPhone()) {
      $rubriques.style.height = `${boxHeight + rubHeight}px`;
    } else {
      $rubriques.style.height = `${this.getHeight()}px`;
    }
  }
};

function bandeau() {
  const $header = document.querySelector('.header');
  const $bandeau = document.querySelector('.bandeau');
  const vheader = box($header).height;
  const vbandeau = box($bandeau).height;
  let scroll = window.scrollY;
  if (scroll >= vheader - vbandeau) {
    $header.style.top = `${- vheader + vbandeau + scroll}px`;
  } else {
    $header.style.top = 0;
  }
  let bottom = $header.getBoundingClientRect().bottom - vbandeau;
  if (bottom < 2) bottom = 0;
  if (bottom >= vheader * 0.25) bottom = vheader * 0.25;
  $bandeau.style.bottom = `${bottom}px`;
}
function box(el) {
  const box = {
    height: el.getBoundingClientRect().height,
    width: el.getBoundingClientRect().width,
  };
  return box;
}
function changePage(nb) {
  let [rubr, txtNb, page, ] = content.reading;
  if (rubr === 'proses') {
    content.reading = [rubr, txtNb, page + nb, 0];
    content[rubr][txtNb].page = page + nb;
    content[rubr][txtNb].scroll = 0;
  } else {
    content.reading = [rubr, txtNb + nb, 0, 0];
    txtNb = txtNb + nb;
    // ajouter les conditions avant d'effectuer + nb
    if (txtNb < 0) {
      txtNb = content[rubr].length - 1;
    } else if (txtNb > content[rubr].length - 1) {
      txtNb = 0;
    }

  }
  reader(rubr, txtNb);
}
function changeView(nb) {
  let [rubr, index, page, ] = content.reading, i = content.viewing;
  const liste = content[rubr][index].txt[page];
  let view = i + nb;
  if (view < 0) {
    view = liste.length - 1;
  } else if (view > liste.length - 1) {
    view = 0;
  }
  content.reading[3] = view;
  popup(content.reading);
}
function click(name) {
  if (rubriques.abs && rubriques.clicked !== name) return;
  rubriques.clicked = rubriques.abs ? '' : name;
  $box.style.opacity = 1;
  // si on reclique : clicked = ''
  if (rubriques.clicked === '') {
    rubriques.refresh(true);
    rubriques.allVisible();
    setTimeout(toggle, 210);
    return;
  }
  toggle();
  excerpt(name);
  names.forEach(namediv => {
    if (namediv === name || !rubriques.abs) {
      divs[namediv].style.left = rubriques[name].left + 'px';
      divs[namediv].style.opacity = 1;
      divs[name].style.zIndex = 2;
    } else {
      divs[namediv].style.opacity = 0;
    }
  });
}
function closeOver(e, callback) {
  if (e.target.className !== 'over') return;
  callback();
}
function closeReader() {
  const txt = document.querySelector('#reader');
  const scroll = txt.scrollTop;
  const [rubr, txtNb, page,] = content.reading;
  content[rubr][txtNb].page = page;
  content[rubr][txtNb].scroll = scroll;
  document.querySelector('#reader-container').style = '';
  document.body.style = '';
}
function closePopup() {
  document.querySelector('#popup-container').style = '';
  document.querySelector('#reader-container').style.display = 'flex';
}
function excerpt(rubr) {
  let txt = '';
  const $inbox = document.querySelector('#inbox');
  content[rubr].forEach((obj, i) => {
    txt += `<p onclick= 'reader("${rubr}", ${i})'>${obj.titre}</p>`;
  });
  $inbox.innerHTML = txt;
  updateScroll(document.querySelector('#excerpt-scrollbar'));
}
function init() {
  // on peuple divs
  names.forEach(name => {
    divs[name] = document.querySelector(`.${name}`);
  });
  // ajout des onclick
  let prevEvent, firstEvent;
  let top;
  function middleware(eventName) {
    // let prevEvent, firstEvent;
    // let top;
    if (eventName === 'mousedown') {
      return function down(e) {
        firstEvent = e.target;
      };
    }
    if (eventName === 'click') {
      return function click(e) {
        if (!firstEvent || (firstEvent.id !== e.currentTarget.id)) {
          firstEvent = null;
          return;
        }
        closeOver(e, closeReader);
      };
    }
    if (eventName === 'mousewheel') {
      return function wheel(e) {
        e.preventDefault();
        const oldScroll = e.currentTarget.scrollTop;
        if (content.reading[0] === 'nondit') {
          e.currentTarget.scrollTop += e.deltaY / 2;
        } else {
          e.currentTarget.scrollTop += e.deltaY / 4;
        }
        if (oldScroll !== e.currentTarget.scrollTop) {
          e.preventDefault();
        }
        updateScroll(e.currentTarget.parentNode.lastElementChild);
      };
    }
    if (eventName === 'mousemove') {
      return function move(e) {
        e.preventDefault();
        if (e.buttons && prevEvent) {
          if (e.currentTarget.id === 'reader-scroll' ||
            e.currentTarget.id === 'excerpt-scroll') {
            const $scroll = e.currentTarget;
            if (e.currentTarget.id !== prevEvent.target.id) return;
            // cas du move sur scroll
            // 1. recupérer la valeur de $scroll.style.top et virer 'px'
            const cssTop = window.getComputedStyle($scroll).top;
            top = cssTop.slice(0, -2) | 0;
            // 👀 aux limites
            if (top < - $scroll.offsetHeight / 2) top = - $scroll.offsetHeight / 2;
            if (top > $scroll.parentNode.offsetHeight - $scroll.offsetHeight / 2) {
              top = $scroll.parentNode.offsetHeight - $scroll.offsetHeight / 2;
            }
            // on déplace le scroll
            e.currentTarget.style.top = `${e.screenY - prevEvent.screenY + top}px`;
            const ratio = (top + $scroll.offsetHeight / 2) / $scroll.parentNode.offsetHeight;
            // cibler la div à scroller
            const $toScroll = $scroll.parentNode.parentNode.firstElementChild;
            // on effectue le scroll du contenu
            $toScroll.scrollTop = ratio * ($toScroll.scrollHeight - $toScroll.offsetHeight);
          } else {
            // move sur $reader
            // if (content.reading[0] !== 'nondit') {
            //   e.currentTarget.scrollTop += prevEvent.screenY - e.screenY;
            //   updateScroll(e.currentTarget.parentNode.lastElementChild);
            // }
          }
        }
        prevEvent = e;
      };
    }
    if (eventName === 'touchstart') {
      return function touchstart(e) {
        firstY = e.touches[0].pageY;
      };
    }
    if (eventName === 'touchmove') {
      return function touchmove(e) {
        e.preventDefault();
        if (firstY) {
          e.currentTarget.scrollTop += firstY - e.touches[0].pageY;
          updateScroll(e.currentTarget.parentNode.lastElementChild);
        }
        firstY = e.touches[0].pageY;
      };
    }
  }

  window.addEventListener('resize', refresh);
  window.addEventListener('scroll', bandeau);
  document.querySelector('#reader').addEventListener('touchstart', middleware('touchstart'));
  document.querySelector('#reader').addEventListener('mousewheel', middleware('mousewheel'));
  // document.querySelector('#reader').addEventListener('mousemove', middleware('mousemove'));
  document.querySelector('#reader').addEventListener('touchmove', middleware('touchmove'));
  document.querySelector('#inbox').addEventListener('touchstart', middleware('touchstart'));
  document.querySelector('#inbox').addEventListener('mousewheel', middleware('mousewheel'));
  document.querySelector('#inbox').addEventListener('touchmove', middleware('touchmove'));
  document.querySelector('#prev').onclick = () => changePage(-1);
  document.querySelector('#next').onclick = () => changePage(1);
  document.querySelector('#popup-prev').onclick = () => changeView(-1);
  document.querySelector('#popup-next').onclick = () => changeView(1);
  document.querySelector('#close').onclick = closeReader;
  document.querySelector('#popup-close').onclick = closePopup;
  $excerptClose.onclick = () => click(rubriques.clicked);
  document.querySelector('#reader-container').addEventListener('mousedown', middleware('mousedown'), false);
  document.querySelector('#reader-container').addEventListener('click', middleware('click'));
  // document.querySelector('#reader-container').onclick = (e) => closeOver(e, closeReader);
  document.querySelector('#popup-container').onclick = (e) => closeOver(e, closePopup);
  document.querySelector('#reader-scroll').addEventListener('mousedown', middleware('mousedown'));
  document.querySelector('#reader-scroll').addEventListener('mousemove', middleware('mousemove'));
  document.querySelector('#excerpt-scroll').addEventListener('mousemove', middleware('mousemove'));
  names.forEach((name) => {
    divs[name].addEventListener('click', () => click(name), false);
  });
  rubriques.refresh();
}
function popup([rubr, index, page, i]) {
  const $img = document.querySelector('#popup-container img');
  document.querySelector('#popup-container').style.display = 'flex';
  document.querySelector('#reader-container').style.display = '';
  document.body.style.overflow = 'hidden';
  content.viewing = i;
  const obj = content[rubr][index];
  const image = obj.txt[page][i];
  const src = `${content.url + obj.url}${image[1]}.jpg`;
  document.querySelector('#popup-titre').innerHTML = `<cite>${image[0]} (${obj.auteur})</cite>`;

  $img.style = '';
  $img.onload = () => resize($img);
  $img.src = src;
}
function reader(rubr, index) {
  const obj = content[rubr][index];
  const $reader = document.querySelector('#reader'); 
  const $texte = document.querySelector('#texte');
  const $pageNb = document.querySelector('#pageNb');
  document.querySelector('#reader-container').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // on sauvegarde l'objet lu (rubr, textNb, page, scroll) dans content
  let { page = 0, scroll } = obj;
  content.reading = [rubr, index, page, scroll];
  $texte.innerHTML = '';
  $pageNb.innerHTML = '';
  if (rubr !== 'nondit') {
    // affichage proses ou poésies
    if (page === 0) {
      if (rubr === 'proses') {
        $texte.innerHTML = `<p></p><p></p><p></p><p></p>`;
        $texte.innerHTML += `<h2>${obj.titre}</h2>`;
        $texte.innerHTML += `<h3>${obj.titre2}</h3>`;
        $texte.innerHTML += `<p></p>`;
      } else {
        $texte.innerHTML = `<h2>${obj.titre}</h2>`;
        $texte.innerHTML += '<p></p>';
      }
    } else {
      $pageNb.innerHTML = page;
    }
    $texte.classList.remove('galerie');
    $texte.innerHTML += obj.txt[page];
  } else {
    // affichage du non-dit (miniatures)
    let txt = '';
    const obj = content[rubr][index];
    for (let i = 0; i < obj.txt[page].length; i++) {
      const image = obj.txt[page][i];

      const srcThumb = `${content.url + obj.url}tbn_${image[1]}.jpg`;
      txt += `<figure onclick='popup(["${rubr}",${index}, ${page}, ${i}])' class='thumb'>`;
      txt += `<img src='${srcThumb}' alt='${image[0]} - Auteur : ${obj.titre}'`;
      txt += "width='150px' height='150px'>";
      txt += `<figcaption>${image[0]}</figcaption></figure>`;
    }
    $texte.innerHTML += txt;
    $texte.classList.add('galerie');
  }
  if (rubr === 'proses') {
    document.querySelector('#pageNb').style.display = '';
    document.querySelector('#reader').style.marginBottom = '40px';
  } else {
    document.querySelector('#pageNb').style.display = 'none';
    document.querySelector('#reader').style.marginBottom = '';
  }
  //on scroll la boite reader (qui contient le texte)
  $reader.scrollTop = scroll;
  // on affiche les boutons #prev et #next
  let next, prev;
  if (page !== 0) {
    prev = true;
  }
  if (page < obj.txt.length - 1) {
    next = true;
  }
  if (rubr === 'poesies') {
    $texte.style.textAlign = 'left';
    if (box($texte).height === box($reader).height) {
      $texte.classList.add(('texteVerticalCenter'));
    } else {
      $texte.classList.remove(('texteVerticalCenter'));
    }
    prev = next = true;
    document.querySelector('#reader-titre').innerHTML = '';
  } else {
    $texte.style.textAlign = '';
    $texte.classList.remove(('texteVerticalCenter'));
    document.querySelector('#reader-titre').innerHTML = `<cite>${obj.titre}</cite> (${obj.auteur})`;
  }
  document.querySelector('#prev').style.height = prev ? '' : '0';
  document.querySelector('#next').style.height = next ? '' : '0';
  updateScroll(document.querySelector('#reader-scrollbar'));
  // updateScroll(document.querySelector('#reader-scrollbar'));
}
function refresh(e) {
  bandeau();
  // pas d'anim des rubriques et de l'excerpt si resize
  let anim = (!e || e.eventName === 'resize') ? true : false;
  rubriques.refresh(anim);
  updateScroll(document.querySelector('#excerpt-scrollbar'));
  updateScroll(document.querySelector('#reader-scrollbar'));

  if (document.querySelector('#popup-container').style.display === 'flex') {
    resize(document.querySelector('#popup-container img'));
  }
}
function resize($img) {
  // calculer 2 ratios (width : container / originale), (height : container / originale)
  // conserver celui qui vérifie (originale * ratio) < container
  // si les deux vérifient la condition, prendre le plus grand
  // margin_top + margin-bottom + 2 * border = 24 (px)
  const marginH = box(document.querySelector('#popup-titre')).height + 35 + 24;
  let ratioWidth = (window.innerWidth - 4) / box($img).width;
  let ratioHeight = (window.innerHeight - marginH) / box($img).height;
  if (ratioWidth * box($img).height > window.innerHeight - marginH) ratioWidth = 0;
  if (ratioHeight * box($img).width > window.innerWidth - 4) ratioHeight = 0;
  let ratios = [ratioWidth, ratioHeight];
  const ratio = ratios.reduce((acc, curr) => Math.max(acc, curr), 0);
  // calcul de la largeur de l'image
  let width = box($img).width * ratio - 4;
  $img.style.width = `${width}px`;
  $img.style.maxWidth = `${$img.naturalWidth}px`;
  // on ajuste la largeur pour ne pas dépasser naturalWidth, si besoin
  width = (width > $img.naturalWidth) ? $img.naturalWidth : width;
  document.querySelector('#popup-nav').style.maxWidth = `${width * 0.95}px`;
}
/**
 * 
 * @param {Node} el 
 */
function updateScroll(el) {
  // on récupère la boite de contenu (à scroller)
  const $toScroll = el.parentNode.firstElementChild;
  // scrollMax du contenu (en px)
  const scrollMax = $toScroll.scrollHeight - $toScroll.offsetHeight;
  if (scrollMax <= 0) {
    el.style.display = 'none';
  } else {
    el.style.display = '';
    // ratio (de 0 à 1)
    const ratio = $toScroll.scrollTop / scrollMax;
    // scroll max de scroll : (scrollbar.height - scroll.height) * ratio
    el.lastElementChild.style.top = `${(box(el).height) * ratio - box(el.firstElementChild).height / 2}px`;
  }
}
function toggle() {
  let txt = '';
  if (!rubriques.abs) {
    $rubriques.style.height = `${rubriques.getHeight()}px`;
    rubriques.abs = true;
    txt = 'absolute';
  } else {
    $rubriques.style.height = '';
    rubriques.abs = false;
  }
  names.forEach(name => {
    divs[name].style.position = txt;
  });
  if (rubriques.abs) refresh();
}

init();