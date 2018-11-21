const names = ['proses', 'poesies', 'nondit'];
const divs = {};
const $rubriques = document.querySelector('.rubriques');
const $excerptCont = document.getElementById('excerpt-container');
const $excerpt = document.getElementById('excerpt');
const scr = {};
const rubriques = {
  one: false,
  clicked: '',
  height: 0,
  top,
  isPhone() {
    const cssCheck = window.getComputedStyle(document.querySelector('.header .bandeau'));
    const positionCheck = cssCheck.getPropertyValue('position');
    return (positionCheck === 'relative') ? true : false;
  },
  refresh(anim) {
    if (!this.one) return;
    const rubWidth = box(divs.proses).width;
    const rubHeight = box(divs.proses).height;
    // gestion de la transition (anim ou pas ?)
    const transition = (anim) ? '' : '0s';
    $excerptCont.style.transition = transition;
    names.forEach( name => {
      divs[name].style.transition = transition;
    });
    // calcul de space
    let space = 0;
    if (this.isPhone()) {
      space = box($rubriques).height - rubHeight * 3;
      space = space < 0 ? 0 : space / 3;
      space = space / rubHeight * 100;
    } else {
      space = (box($rubriques).width - rubWidth * 3) / 3;
      space = space / rubWidth * 100;
    }
    // udapte rubriques > divs
    names.forEach((name, i) => {
      // version mobile
      if (this.isPhone()) {
        divs[name].style.transform = `translate(0, -${ i * (100 + space) }%)`;
      } else {
        // version desktop
        divs[name].style.transform = `translate(-${i * (100 + space) }%, 0)`;
      }
    });
    // update box
    const padding = box($rubriques).width * 0.035; // 0.035 = $excerptCont.paddingLeft
    document.getElementById('excerpt-close').style.left = `${padding - 6}px`;
    if (this.isPhone()) {
      // animation verticale (mobile)
      $excerptCont.style.transform = 'translate(0, 50%)';
    } else {
      // animation horizontale (desktop)
      $excerptCont.style.transform = 'translate(42%, 0)';
    }
  }
};
// animations !!!
function anim($el, keys, duration = 300) {
  // if ($el.animate) {
  if ('animate' in $el) {
    $el.animate(keys[0],
      {
        duration: duration,
        easing: 'cubic-bezier(0, 0.79, 0.58, 1)',
        fill: 'both',
      });
  } else {
    window.setTimeout(() => {
      keys[1].forEach(style => {
        $el.style[style[0]] = style[1];
      });
    }, 5);
    
  }
  
}
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
  if (rubriques.one && rubriques.clicked !== name) return;
  rubriques.clicked = rubriques.one ? '' : name;
  // si on reclique : clicked = ''
  if (!rubriques.one) {
    excerpt(name);
    names.forEach(namediv => {
      if (namediv === name) {
        divs[namediv].style.opacity = 1;
        divs[namediv].style.zIndex = 10;
      } else {
        divs[namediv].style.opacity = 0;
        divs[namediv].style.zIndex = '';
      }
    });
    $excerptCont.style.opacity = 1;
  } else {
    // re-click : reinitialiser les divs (et excerpt)
    names.forEach((name, i) => {
      divs[name].style.opacity = 1;
      divs[name].style.transition = '';
      divs[name].style.transform = 'translate(0)';
    });
    $excerptCont.style.opacity = 0;
    $excerptCont.style.transform = '';
  }
  rubriques.one = rubriques.one ? false : true;
  rubriques.refresh(true);
}
function closeOver(e, callback) {
  if (e.target.className !== 'over' || 
      window.getComputedStyle(document.querySelector('#popup-close')).display === 'none') return;
  callback();
}
function closeReader() {
  document.body.style = '';
  const txt = document.querySelector('#reader');
  const scroll = txt.scrollTop;
  const [rubr, txtNb, page,] = content.reading;
  content[rubr][txtNb].page = page;
  content[rubr][txtNb].scroll = scroll;
  // disparition du reader (et du #over)
  const $over = document.querySelector('#over');
  const $container = document.querySelector('#reader-container');
  let keys = [
    [
      { transform: 'scale(1)' },
      { transform: 'scale(0)' }
    ],
    [
        ['transform', 'scale(0)'],
    ]
  ];
  anim($container, keys, 200);
  keys = [
    [
      { opacity: 1 },
      { opacity: 0 },
    ],
    [
      ['opacity', '0'],
    ]
  ];
  anim($over, keys, 200);
  window.setTimeout(()=> {
    $container.style.display = '';
    $over.style.display = '';
  }, 200);
}
function closePopup() {
  const $popup = document.querySelector('#popup-container');
  const $reader = document.querySelector('#reader-container');
  // disparition du $popup, réapparition du $reader
  const popupOut = [
    [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(0)', opacity: 0 },
    ],
    [
      ['transform', 'scale(0)'],
      ['opacity', '0'],
    ]
  ];
  const readerIn = [
    [
      { transform: 'scale(0)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
    ],
    [
      ['transform', 'scale(1)'],
      ['opacity', '1'],
    ]
  ];
  
  window.setTimeout(() => {
    document.querySelector('#popup-img img').src = '';
  }, 400);
  // disparition du popup (mais pas du #over)
  // et réapparition du reader
  anim($popup, popupOut);
  anim($reader, readerIn);
  window.setTimeout(() => {
    document.querySelector('#popup-container').style.display = '';
    document.querySelector('#reader-container').style.display = 'flex';
    updateScroll(document.querySelector('#reader-scrollbar'));
  }, 300);
}
function excerpt(rubr) {
  let txt = '';
  const $texte = document.querySelector('#excerpt-texte');
  content[rubr].forEach((obj, i) => {
    if (rubr !== 'nondit') {
      txt += `<p onclick= 'readerShow("${rubr}", ${i})'>${obj.titre}</p>`;
    } else {
      txt += `<p onclick= 'readerShow("${rubr}", ${i})'>${obj.auteur} - (${obj.titre})</p>`;
    }
  });
  $texte.innerHTML = txt;
  updateScroll(document.querySelector('#excerpt-scrollbar'));
}
function init() {
  // on peuple divs
  names.forEach(name => {
    divs[name] = document.querySelector(`.${name}`);
  });
  ['excerpt', 'reader'].forEach( id => {
    scr[id] = 0;
    scr[`${id}-scroll`] = 0;
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
        const targetId = e.currentTarget.id;
        const $texte = document.querySelector(`#${targetId}-texte`);
        
        const oldScroll = e.currentTarget.scrollTop;
        // const oldScroll = scr[targetId];
        let scroll = oldScroll;
        let delta = e.deltaY;
        if (e.deltaMode === 1) {
          delta *= 33;
        }
        if (content.reading[0] === 'nondit') {
          e.currentTarget.scrollTop += delta / 2;
          // delta /= 2;
        } else {
          e.currentTarget.scrollTop += delta / 4;
          // delta /= 4;
        }
        scroll += delta;
        
        // attention aux limites 👀
        const max = box($texte).height - box(e.currentTarget).height;
        if (scroll > max + 30) scroll = max + 30;
        if (scroll < 0) scroll = 0;
        // translate $texte
        // $texte.style.transform = `translateY(${-scroll}px)`;
        // saving scroll
        scr[targetId] = scroll;
        updateScroll(e.currentTarget.parentNode.lastElementChild);
      };
    }
    if (eventName === 'mousemove') {
      return function move(e) {
        e.preventDefault();
        if (e.buttons && prevEvent) {
          let id = e.currentTarget.id;
          if (id === 'reader-scroll' || id === 'excerpt-scroll') {
            if (id !== prevEvent.target.id) return;
            const $scroll = e.currentTarget;
            const scroll = 0; // = ???
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
  document.querySelector('#excerpt').addEventListener('touchstart', middleware('touchstart'));
  document.querySelector('#excerpt').addEventListener('wheel', middleware('wheel'));
  document.querySelector('#excerpt').addEventListener('touchmove', middleware('touchmove'), tab);
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
  window.setTimeout( bandeau, 20 );
}
function popup([rubr, index, page, i]) {
  const $img = document.querySelector('#popup-container img');
  const $popup = document.querySelector('#popup-container');
  const $titre = document.querySelector('#popup-titre');
  const $reader = document.querySelector('#reader-container');
  $titre.style.opacity = 0;
  
  const animIn = [
    [
      { transform: 'scale(0)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
    ],
    [
      ['transform', 'scale(1)'],
      ['opacity', '1'],
    ]
  ];
  const animOut = [
    [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(0)', opacity: 0 },
    ],
    [
      ['transform', 'scale(0)'],
      ['opacity', '0'],
    ]
  ];
  // disparition du reader et du popup
  anim($popup, animOut, 200);

  // début !!!
  // faire ici le code pour l'affichage de l'image
  content.viewing = i;
  const obj = content[rubr][index];
  const [imageName, imageURL] = obj.txt[page][i];
  const src = `${content.url + obj.url}${imageURL}.jpg`;
  // load and display image
  const show = () => {
    $titre.style.opacity = 1;
    $titre.innerHTML = `${imageName} (${obj.auteur})`;
    document.querySelector('#popup-img img').alt = `${imageName} - (${obj.auteur})`;
    resize($img);
    anim($popup, animIn, 200);
  };
  $img.onload = show;
  setTimeout(()=> {
    if ($img.src.includes(src)) {
      show();
    } else {
      $img.src = src;
    }
  }, 200);
}
function popupShow([rubr, index, page, i]) {
  const $popup = document.querySelector('#popup-container');
  const $reader = document.querySelector('#reader-container');
  const animIn = [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ];
  const animOut = [
    [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(0)', opacity: 0 },
    ],
    [
      ['transform', 'scale(0)'],
      ['opacity', '0'],
    ]
  ];
  document.querySelector('#popup-container').style.display = 'flex';
  anim($reader, animOut, 200);
  document.body.style.overflow = 'hidden';
  popup([rubr, index, page, i]);
}
// update du reader
function reader(rubr, index) {
  const obj = content[rubr][index];
  const $reader = document.querySelector('#reader'); 
  const $texte = document.querySelector('#reader-texte');
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
// apparition du reader et du #over
function readerShow(rubr, index) {
  const $over = document.querySelector('#over');
  const $container = document.querySelector('#reader-container');
  $container.style.display = 'flex';
  let keys = [
    [
      { transform: 'scale(0)', opacity: '0' },
      { transform: 'scale(1)', opacity: '1' }
    ],
    [
      ['transform', 'scale(1)'],
      ['opacity', '1'],
      ['display', 'flex'],
    ]
  ];
  // animation du container
  anim($container, keys, 300);
  // animation du $over
  keys = [
    [
      { opacity: '0' },
      { opacity: '1' }
    ],
    [
      ['opacity', '1'],
      ['display', 'block'],
    ]
  ];
  $over.style.display = 'block';
  anim($over, keys, 300);
  const padd = window.innerWidth - document.body.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${padd}px`;
  reader(rubr, index);
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

window.onload = () => {
  document.querySelector('.header img').style.opacity = '0';
  const $divs =  document.querySelectorAll('.hideLoading');
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  [...$divs].forEach( $div => {
    $div.style.opacity = '1';
  });
  init();
};
