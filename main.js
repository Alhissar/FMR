const names = ['proses', 'poesies', 'nondit'];
const divs = {};
const $rubriques = document.querySelector('.rubriques');
const $box = document.getElementById('box');
const $inbox = document.getElementById('inbox');
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
    document.getElementById('excerpt-close').style.left = `${padding + 6}px`;
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
    // $header.style.top = `${- vheader + vbandeau + scroll}px`;
    $header.style.transform = `translateY(${- vheader + vbandeau + scroll}px)`;
  } else {
    // $header.style.top = 0;
    $header.style.transform = '';
  }
  let bottom = $header.getBoundingClientRect().bottom - vbandeau;
  if (bottom < 2) bottom = 0;
  if (bottom >= vheader * 0.25) bottom = vheader * 0.25;
  // $bandeau.style.bottom = `${bottom}px`;
  if (rubriques.isPhone()) {
    $bandeau.style.transform = ``;
  } else {
    $bandeau.style.transform = `translateY(-${vbandeau + bottom + 0.1}px)`;
  }
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
    setTimeout(toggle, 410);
    return;
  }
  toggle();
  excerpt(name);
  names.forEach(namediv => {
    if (namediv === name || !rubriques.abs) {
      divs[namediv].style.left = rubriques[name].left + 'px';
      divs[namediv].style.opacity = 1;
      divs[name].style.zIndex = 10;
    } else {
      divs[namediv].style.opacity = 0;
    }
  });
}
function closeOver(e, callback) {
  if (e.target.className !== 'over' || 
      window.getComputedStyle(document.querySelector('#popup-close')).display === 'none') return;
  callback();
}
function closeReader() {
  const txt = document.querySelector('#reader');
  const scroll = txt.scrollTop;
  const [rubr, txtNb, page,] = content.reading;
  content[rubr][txtNb].page = page;
  content[rubr][txtNb].scroll = scroll;
  // si 'proses' on enregistre le cookie
  if (rubr === 'proses') {
    cookieFrom(content);
  }
  // disparition du reader (et du #over)
  const $over = document.querySelector('#over');
  const $container = document.querySelector('#reader-container');
  const animOptions = {
    duration: 300,
    easing: 'cubic-bezier(0.2,1,0.6,1)',
    fill: 'forwards'
  };
  let keys = [
    { transform: 'scale(1)' },
    { transform: 'scale(0)' }
  ];
  anim($container, keys, 300);
  keys = [
    { opacity: 1 },
    { opacity: 0 },
  ];
  anim($over, keys, 300);
  window.setTimeout(()=> {
    $container.style = '';
    $over.style = '';
    document.body.style = '';
  }, 300);
}
function closePopup() {
  const $popup = document.querySelector('#popup-container');
  const $reader = document.querySelector('#reader-container');
  // disparition du $popup, réapparition du $reader
  const popupOut = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(0)', opacity: 0 },
  ];
  const readerIn = [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ];
  
  window.setTimeout(() => {
    document.querySelector('#popup-img img').src = '';
  }, 400);
  // disparition du popup (mais pas du #over)
  // et réapparition du reader
  anim($popup, popupOut);
  anim($reader, readerIn);
  window.setTimeout(() => {
    document.querySelector('#popup-container').style = '';
    document.querySelector('#reader-container').style.display = 'flex';
    updateScroll(document.querySelector('#reader-scrollbar'));
  }, 300);
}
function cookieFrom(content) {
  let cookieContent = [];
  content.proses.forEach(({titre, page, scroll}) => {
    cookieContent.push({titre, page, scroll});
  });
  docCookies.setItem('fmr', JSON.stringify(cookieContent), Infinity);
}
function cookieTo(content) {
  const json = docCookies.getItem('fmr');
  if (!json) return false;
  const prosesInfos = JSON.parse(json);
  prosesInfos.forEach( prose => {
    // trouve l'index de la prose dans content.proses
    const i = content.proses.findIndex( elem => elem.titre === prose.titre);
    content.proses[i].page = prose.page;
    content.proses[i].scroll = prose.scroll;
  });
}
function excerpt(rubr) {
  let txt = '';
  const $inbox = document.querySelector('#inbox');
  content[rubr].forEach((obj, i) => {
    if (rubr !== 'nondit') {
      txt += `<p onclick= 'readerShow("${rubr}", ${i})'>${obj.titre}</p>`;
    } else {
      txt += `<p onclick= 'readerShow("${rubr}", ${i})'>${obj.auteur} - (${obj.titre})</p>`;
    }
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
  let top, firstX, firstY;
  function middleware(eventName) {
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
    if (eventName === 'wheel') {
      return function wheel(e) {
        e.preventDefault();
        const oldScroll = e.currentTarget.scrollTop;
        let delta = e.deltaY;
        if (e.deltaMode === 1) {
          delta *= 33;
        }
        if (content.reading[0] === 'nondit') {
          e.currentTarget.scrollTop += delta / 2;
        } else {
          e.currentTarget.scrollTop += delta / 4;
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
          }
        }
        prevEvent = e;
      };
    }
    if (eventName === 'touchstart') {
      return function touchstart(e) {
        if (this.id === 'popup-container') {
          e.preventDefault();
          firstX = e.touches[0].pageX;
        } else {
          firstY = e.touches[0].pageY;
        }
      };
    }
    if (eventName === 'touchmove') {
      return function touchmove(e) {
        e.preventDefault();
        e.stopPropagation();
        if (firstY) {
          e.currentTarget.scrollTop += firstY - e.touches[0].pageY;
          updateScroll(e.currentTarget.parentNode.lastElementChild);
        }
        firstY = e.touches[0].pageY;
      };
    }
    if (eventName === 'touchend') {
      return function touchend(e) {
        const delta = firstX - e.changedTouches[0].pageX;
        if (Math.abs(delta) < 50) {
          setTimeout(closePopup, 50);
          return;
        } else {
          changeView(Math.sign(delta));
        }
      };
    }
  }
  const tab = {passive: false};
  window.addEventListener('resize', refresh);
  window.addEventListener('scroll', bandeau, {passive: true});
  document.querySelector('#reader').addEventListener('touchstart', middleware('touchstart'));
  document.querySelector('#reader').addEventListener('wheel', middleware('wheel'));
  document.querySelector('#reader').addEventListener('touchmove', middleware('touchmove'), tab);
  document.querySelector('#inbox').addEventListener('touchstart', middleware('touchstart'));
  document.querySelector('#inbox').addEventListener('wheel', middleware('wheel'));
  document.querySelector('#inbox').addEventListener('touchmove', middleware('touchmove'), tab);
  document.querySelector('#prev').onclick = () => changePage(-1);
  document.querySelector('#next').onclick = () => changePage(1);
  document.querySelector('#popup-prev').onclick = () => changeView(-1);
  document.querySelector('#popup-next').onclick = () => changeView(1);
  document.querySelector('#close').onclick = closeReader;
  document.querySelector('#popup-close').onclick = closePopup;
  document.getElementById('excerpt-close').onclick = () => click(rubriques.clicked);
  document.querySelector('#reader-container').addEventListener('mousedown', middleware('mousedown'), false);
  document.querySelector('#reader-container').addEventListener('click', middleware('click'));
  document.querySelector('#popup-container').onclick = (e) => closeOver(e, closePopup);
  document.querySelector('#popup-container').addEventListener('touchstart', middleware('touchstart'));
  document.querySelector('#popup-container').addEventListener('touchend', middleware('touchend'));
  document.querySelector('#reader-scroll').addEventListener('mousedown', middleware('mousedown'));
  document.querySelector('#reader-scroll').addEventListener('mousemove', middleware('mousemove'));
  document.querySelector('#excerpt-scroll').addEventListener('mousemove', middleware('mousemove'));
  names.forEach((name) => {
    divs[name].addEventListener('click', () => click(name), false);
  });
  rubriques.refresh();
  cookieTo(content);
}
function popup([rubr, index, page, i]) {
  const $img = document.querySelector('#popup-container img');
  const $popup = document.querySelector('#popup-container');
  const $titre = document.querySelector('#popup-titre');
  const $reader = document.querySelector('#reader-container');
  // $popup.style.opacity = 0;
  $titre.style.opacity = 0;
  
  const animIn = [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ];
  const animOut = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(0)', opacity: 0 },
  ];
  const animOptions = {
    duration: 300,
    fill: 'both',
    easing: 'ease-out',
  };
  // disparition du reader et du popup
  anim($popup, animOut, 300);

  // début !!!
  // faire ici le code pour l'affichage de l'image
  content.viewing = i;
  const obj = content[rubr][index];
  const [imageName, imageURL] = obj.txt[page][i];
  const src = `${content.url + obj.url}${imageURL}.jpg`;
  // load and display image
  const show = () => {
    // $popup.style.opacity = 1;
    $titre.style.opacity = 1;
    $titre.innerHTML = `${imageName} (${obj.auteur})`;
    document.querySelector('#popup-img img').alt = `${imageName} - (${obj.auteur})`;
    resize($img);
    // $popup.animate(animIn, animOptions);
    anim($popup, animIn);
  };
  $img.onload = show;
  setTimeout(()=> {
    if ($img.src.includes(src)) {
      show();
    } else {
      $img.src = src;
    }
  }, 400);
}
function popupShow([rubr, index, page, i]) {
  const $popup = document.querySelector('#popup-container');
  const $reader = document.querySelector('#reader-container');
  const animIn = [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ];
  const animOut = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(0)', opacity: 0 },
  ];
  document.querySelector('#popup-container').style.display = 'flex';
  anim($reader, animOut);
  // document.querySelector('#reader-container').style.display = '';
  document.body.style.overflow = 'hidden';
  popup([rubr, index, page, i]);
}
// animations !!!
function anim($el, keys, duration = 300) {
  $el.animate( keys,
    {
      duration: duration,
      easing: 'cubic-bezier(0, 0.79, 0.58, 1)',
      fill: 'both',
    });
}
// apparition du reader et du #over
function readerShow(rubr, index) {
  const $over = document.querySelector('#over');
  const $container = document.querySelector('#reader-container');
  document.querySelector('#reader-container').style.display = 'flex';
  let keys = [
    { transform: 'scale(0)', opacity: '0' },
    { transform: 'scale(1)', opacity: '1' },
  ];
  // animation du container
  anim($container, keys, 300);
  // animation du $over
  keys = [
    { opacity: 0 },
    { opacity: 1 },
  ];
  anim($over, keys, 300);
  document.querySelector('#over').style.display = 'block';
  document.body.style.overflow = 'hidden';
  reader(rubr, index);
}
// update du reader
function reader(rubr, index) {
  const obj = content[rubr][index];
  const $reader = document.querySelector('#reader'); 
  const $texte = document.querySelector('#texte');
  const $pageNb = document.querySelector('#pageNb');
  // on sauvegarde l'objet lu (rubr, textNb, page, scroll) dans content
  let { page = 0, scroll } = obj;
  content.reading = [rubr, index, page, scroll];
  $texte.innerHTML = '';
  $pageNb.innerHTML = '';
  $texte.classList.remove('page0');
  // remplissage du reader
  if (rubr !== 'nondit') {
    // affichage proses ou poésies
    if (page === 0) {
      if (rubr === 'proses') {
        $texte.classList.add('page0');
        $texte.innerHTML += `<h2>${obj.titre}</h2>`;
        $texte.innerHTML += `<h3>${obj.titre2}</h3>`;
        $texte.innerHTML += `<p></p>`;
      } else {
        $texte.innerHTML = '<p></p>';
        $texte.innerHTML += `<h2>${obj.titre}</h2>`;
        $texte.innerHTML += '<p></p>';
      }
    } else {
      $pageNb.innerHTML = page;
    }
    $texte.classList.remove('galerie');
    $texte.innerHTML += obj.txt[page];
    // add some space below poem
    if (rubr === 'poesies') {
      $texte.innerHTML += `<p></p>`;
    }
  } else {
    // affichage du non-dit (miniatures)
    let txt = '';
    const obj = content[rubr][index];
    for (let i = 0; i < obj.txt[page].length; i++) {
      const image = obj.txt[page][i];
      const srcThumb = `${content.url + obj.url}tbn_${image[1]}.jpg`;
      txt += `<figure onclick='popupShow(["${rubr}",${index}, ${page}, ${i}])' class='thumb'>`;
      txt += `<img src='${srcThumb}' alt='${image[0]} - (${obj.auteur})'>`;
      // txt += "width='150px' height='150px'>";
      txt += `<figcaption>${image[0]}</figcaption></figure>`;
    }
    $texte.innerHTML += txt;
    $texte.classList.add('galerie');
  }
  // affichage du no de page
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
  // gestion centrage vertical et titre
  if (rubr === 'poesies') {
    $texte.style.textAlign = 'left';
    if (box($texte).height === box($reader).height) {
      $texte.classList.add('texteVerticalCenter');
    } else {
      $texte.classList.remove('texteVerticalCenter');
    }
    prev = next = true;
    document.querySelector('#reader-titre').innerHTML = '';
  } else {
    $texte.style.textAlign = '';
    $texte.classList.remove(('texteVerticalCenter'));
    document.querySelector('#reader-titre').innerHTML = `- ${obj.titre} - (${obj.auteur})`;
  }
  // affichage boutons prev, next
  document.querySelector('#prev').style.height = prev ? '' : '0';
  document.querySelector('#next').style.height = next ? '' : '0';
  // update de scrollbar
  updateScroll(document.querySelector('#reader-scrollbar'));
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
  // const marginH = box(document.querySelector('#popup-titre')).height + 10;
  const marginH = 40; // hardcode (taille titre 30px + 10px)
  let ratioWidth = (window.innerWidth - 4) / $img.naturalWidth;
  let ratioHeight = (window.innerHeight - marginH) / $img.naturalHeight;
  if (ratioWidth * $img.naturalHeight > window.innerHeight - marginH) ratioWidth = 0;
  if (ratioHeight * $img.naturalWidth > window.innerWidth - 4) ratioHeight = 0;
  let ratios = [ratioWidth, ratioHeight];
  const ratio = ratios.reduce((acc, curr) => Math.max(acc, curr), 0);
  // calcul de la largeur de l'image
  let width = $img.naturalWidth * ratio - 4;
  $img.style.width = `${width}px`;
  $img.style.maxWidth = `${$img.naturalWidth}px`;
}
/**
 * Update $scroll.top en fc de $toScroll
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