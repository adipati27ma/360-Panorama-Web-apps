const panoImage = document.querySelector('.panorama-image');
const lakePano = '../images/pano2.jpg';
const shallowSeaPano = '../images/LAUT.jpg';
const dessertPano = '../images/GURUN.jpg';
const riverPano = '../images/SUNGAI.jpg';

// For Mouse Event---
panoImage.addEventListener('mousedown', () => {
  panoImage.style.cursor = 'move';
});

panoImage.addEventListener('mouseup', () => {
  panoImage.style.cursor = 'default';
});
// End Mouse Event---

//
// Panorama Code---
const panorama0 = new PANOLENS.ImagePanorama(lakePano);
const panorama1 = new PANOLENS.ImagePanorama(shallowSeaPano);
const panorama2 = new PANOLENS.ImagePanorama(dessertPano);
const panorama3 = new PANOLENS.ImagePanorama(riverPano);

const viewer = new PANOLENS.Viewer({
  container: panoImage,
  // autoRotate: true,
  // autoRotateSpeed: 0.5,
  // autoRotateActivationDuration: 10000,
  // initialLookAt: new THREE.Vector3(4365.89, 221.37, 2410.68), // tidak bisa dipakai, panolens lama:(
  // controlBar: false,
  output: 'console',
});

/* --Infospot code-- */
// ---Infospot Pano 0
const infospot1 = new PANOLENS.Infospot();
infospot1.position.set(4358.64, 483.64, 2386.35);
infospot1.addHoverText('Selamat Datang di Virtual Field Trip');

const infospotPetunjuk = new PANOLENS.Infospot();
// infospotPetunjuk.position.set(4367.6, 7.76, 2425.79);
infospotPetunjuk.position.set(3739.43, -118.55, 3308.99);
infospotPetunjuk.addHoverElement(
  document.querySelector('.infospot-petunjuk'),
  -55
);
infospotPetunjuk.lockHoverElement();

const infospotLautDangkal = new PANOLENS.Infospot();
infospotLautDangkal.position.set(4697.39, -606.55, -1470.39);
infospotLautDangkal.addHoverText('Ekosistem Laut Dangkal');

const infospotGurun = new PANOLENS.Infospot();
infospotGurun.position.set(4977.4, 9.29, 152.57);
infospotGurun.addHoverText('Ekosistem Gurun');

const infospotSungai = new PANOLENS.Infospot();
infospotSungai.position.set(322.01, 13.47, 4982.59);
infospotSungai.addHoverText('Ekosistem Sungai');

// const infospot2 = new PANOLENS.Infospot();
// infospot2.position.set(4961.67, 401.3, -416.92);
// infospot2.addHoverElement(document.getElementById('desc-container'), -200);

// const infospot3 = new PANOLENS.Infospot();
// infospot3.position.set(-3523.79, -620.04, 3477.75);
// // infospot3.position.set(-2032.76, -215.69, -4558.7);
// infospot3.addHoverElement(document.querySelector('.infospot-3'), -55);
// infospot3.lockHoverElement();

// const infospot4 = new PANOLENS.Infospot();
// infospot4.position.set(385.77, 427.56, -4960.2);
// infospot4.addHoverElement(document.querySelector('.infospot-4'), -55);
// infospot4.lockHoverElement();

// ---Infospot Pano 1 (Laut Dangkal)
const infospot1_1 = new PANOLENS.Infospot();
infospot1_1.position.set(-1942.55, 1913.91, 4187.33);
infospot1_1.addHoverElement(document.querySelector('.infospot-1_1'), -55);
infospot1_1.lockHoverElement();

const infospot1_2 = new PANOLENS.Infospot();
infospot1_2.position.set(4607.35, 1066.58, 1601.28);
infospot1_2.addHoverElement(document.querySelector('.infospot-1_2'), -55);
infospot1_2.lockHoverElement();

const infospot1_3 = new PANOLENS.Infospot();
infospot1_3.position.set(3139.82, -3480.92, -1725.81);
infospot1_3.addHoverElement(document.querySelector('.infospot-1_3'), -55);
infospot1_3.lockHoverElement();

const infospot1_4 = new PANOLENS.Infospot();
infospot1_4.position.set(4627.56, 326.86, -1842.03);
infospot1_4.addHoverElement(document.querySelector('.infospot-1_4'), -55);
infospot1_4.lockHoverElement();

const infospot1_5 = new PANOLENS.Infospot();
infospot1_5.position.set(2594.7, -4269.92, 110.48);
infospot1_5.addHoverElement(document.querySelector('.infospot-1_5'), -55);
infospot1_5.lockHoverElement();

const infospot1_6 = new PANOLENS.Infospot();
infospot1_6.position.set(723.41, -3412.47, 3575.14);
infospot1_6.addHoverElement(document.querySelector('.infospot-1_6'), -55);
infospot1_6.lockHoverElement();

const infospot1_7 = new PANOLENS.Infospot();
infospot1_7.position.set(-1894.48, -3835.05, -2584.75);
infospot1_7.addHoverElement(document.querySelector('.infospot-1_7'), -55);
infospot1_7.lockHoverElement();

const infospot1_8 = new PANOLENS.Infospot();
infospot1_8.position.set(2830.21, -3339.23, -2403.26);
infospot1_8.addHoverElement(document.querySelector('.infospot-1_8'), -55);
infospot1_8.lockHoverElement();

const infospot1_9 = new PANOLENS.Infospot();
infospot1_9.position.set(-1648.04, -1839.99, 4337.62);
infospot1_9.addHoverElement(document.querySelector('.infospot-1_9'), -55);
infospot1_9.lockHoverElement();

const infospot1_11 = new PANOLENS.Infospot();
infospot1_11.position.set(-4488.04, 1691.57, 1389.73);
infospot1_11.addHoverElement(document.querySelector('.infospot-1_11'), -55);
infospot1_11.lockHoverElement();

const infospot1_12 = new PANOLENS.Infospot();
infospot1_12.position.set(-1547.5, -3494.46, -3216.65);
infospot1_12.addHoverElement(document.querySelector('.infospot-1_12'), -55);
infospot1_12.lockHoverElement();

// ---Infospot Pano 2 (Gurun)
const infospot2_1 = new PANOLENS.Infospot();
infospot2_1.position.set(-2276.57, 4179.53, 1514.17);
infospot2_1.addHoverElement(document.querySelector('.infospot-2_1'), -55);
infospot2_1.lockHoverElement();

const infospot2_2 = new PANOLENS.Infospot();
infospot2_2.position.set(4133.99, 1168.63, 2547.99);
infospot2_2.addHoverElement(document.querySelector('.infospot-2_2'), -55);
infospot2_2.lockHoverElement();

const infospot2_3 = new PANOLENS.Infospot();
infospot2_3.position.set(737.59, 551.24, 4903.96);
infospot2_3.addHoverElement(document.querySelector('.infospot-2_3'), -55);
infospot2_3.lockHoverElement();

const infospot2_4 = new PANOLENS.Infospot();
infospot2_4.position.set(-3202.77, -266.82, -3817.95);
infospot2_4.addHoverElement(document.querySelector('.infospot-2_4'), -55);
infospot2_4.lockHoverElement();

const infospot2_5 = new PANOLENS.Infospot();
infospot2_5.position.set(3005.22, -103.65, -3986.17);
infospot2_5.addHoverElement(document.querySelector('.infospot-2_5'), -55);
infospot2_5.lockHoverElement();

const infospot2_6 = new PANOLENS.Infospot();
infospot2_6.position.set(2174.95, -1892.99, 4077.62);
infospot2_6.addHoverElement(document.querySelector('.infospot-2_6'), -55);
infospot2_6.lockHoverElement();

// ---Infospot Pano 3 (Sungai)
const infospotPengamat = new PANOLENS.Infospot();
infospotPengamat.position.set(-4878.99, 33.45, 1078.34);
infospotPengamat.addHoverText('Pengamat');

const infospot3_1 = new PANOLENS.Infospot();
infospot3_1.position.set(4067.66, -537.74, 2844.35);
infospot3_1.addHoverElement(document.querySelector('.infospot-3_1'), -55);
infospot3_1.lockHoverElement();

const infospot3_2 = new PANOLENS.Infospot();
infospot3_2.position.set(1668.84, 1735.56, -4370.84);
infospot3_2.addHoverElement(document.querySelector('.infospot-3_2'), -55);
infospot3_2.lockHoverElement();

const infospot3_3 = new PANOLENS.Infospot();
infospot3_3.position.set(1357.97, -1825.42, 4445.5);
infospot3_3.addHoverElement(document.querySelector('.infospot-3_3'), -55);
infospot3_3.lockHoverElement();

const infospot3_4 = new PANOLENS.Infospot();
infospot3_4.position.set(-4846.63, -1152.09, -347.78);
infospot3_4.addHoverElement(document.querySelector('.infospot-3_4'), -55);
infospot3_4.lockHoverElement();

const infospot3_6 = new PANOLENS.Infospot();
infospot3_6.position.set(-2625.22, -3064.99, -2944.35);
infospot3_6.addHoverElement(document.querySelector('.infospot-3_6'), -55);
infospot3_6.lockHoverElement();

const infospot3_7 = new PANOLENS.Infospot();
infospot3_7.position.set(387.24, 4003.18, 2963.89);
infospot3_7.addHoverElement(document.querySelector('.infospot-3_7'), -55);
infospot3_7.lockHoverElement();

const infospot3_8 = new PANOLENS.Infospot();
infospot3_8.position.set(-3072.76, 2005.89, -3390.89);
infospot3_8.addHoverElement(document.querySelector('.infospot-3_8'), -55);
infospot3_8.lockHoverElement();

const infospot3_9 = new PANOLENS.Infospot();
infospot3_9.position.set(2664.01, 1868.34, -3790.23);
infospot3_9.addHoverElement(document.querySelector('.infospot-3_9'), -55);
infospot3_9.lockHoverElement();

// Infospot Add to each Pano
panorama0.add(
  infospot1,
  infospotPetunjuk,
  infospotLautDangkal,
  infospotGurun,
  infospotSungai
);
panorama1.add(
  infospot1_1,
  infospot1_2,
  infospot1_3,
  infospot1_4,
  infospot1_5,
  infospot1_6,
  infospot1_7,
  infospot1_8,
  infospot1_9,
  infospot1_11,
  infospot1_12
);
panorama2.add(
  infospot2_1,
  infospot2_2,
  infospot2_3,
  infospot2_4,
  infospot2_5,
  infospot2_6
);
panorama3.add(
  infospotPengamat,
  infospot3_1,
  infospot3_2,
  infospot3_3,
  infospot3_4,
  infospot3_6,
  infospot3_7,
  infospot3_8,
  infospot3_9
);

/* --End of Infospot code-- */

viewer.add(panorama0, panorama1, panorama2, panorama3);

// Panorama Link
panorama0.link(panorama1, new THREE.Vector3(4815.14, -425.18, -1247.19));
panorama0.link(panorama2, new THREE.Vector3(4974.48, 100.5, 411.7));
panorama0.link(panorama3, new THREE.Vector3(100.13, 80.29, 4991.6));
panorama1.link(panorama0, new THREE.Vector3(2328.12, 2263.85, -3796.19));
panorama2.link(panorama0, new THREE.Vector3(4351.12, 1126.62, -2172.69));
panorama3.link(panorama0, new THREE.Vector3(1411.58, -361.02, -4776.39));

// End of Panorama Code---
//

// My Script---
const infospotsEl = document.querySelectorAll('.infospot');
const hamburgerIcon = document.querySelector('#nav-icon');
const menuList = document.querySelector('.menu-list');
const menuItem = document.querySelectorAll('.menu-item');
const navTitle = document.querySelector('.navigation-title');
const panoList = viewer.getScene().children;

// toggle infospot content + Event Listener image viewer
const overlayContainer = document.querySelector('.image-viewer-overlay');
const imageOverlay = document.querySelector('img.image-zoom');

function toggleInfospot(e) {
  const contentInfospot = e.target.nextElementSibling;

  // Check if content infospot exist
  if (contentInfospot) {
    // Check if content infospot is show or not
    if (contentInfospot.classList.contains('show')) {
      // Hide content
      contentInfospot.classList.remove('show');
      setTimeout(() => {
        contentInfospot.style.display = 'none';
      }, 500);
    } else {
      // Show content
      contentInfospot.style.display = 'block';
      setTimeout(() => {
        contentInfospot.classList.add('show');
      }, 1);

      // addEventListener to img in active infospot
      const img = contentInfospot.querySelector('img');
      function onClickImage(e) {
        imageOverlay.src = e.target.src;
        imageOverlay.alt = e.target.src;
        console.log(img);
        console.log(img.src);
        overlayContainer.style.display = 'flex';
        setTimeout(() => {
          overlayContainer.classList.add('show');
        }, 1);
      }
      img.addEventListener('click', onClickImage);
      img.addEventListener('touchstart', onClickImage);
    }
  }
}

infospotsEl.forEach((el) => {
  el.addEventListener('click', toggleInfospot);
  el.addEventListener('touchstart', toggleInfospot);
});

// Exit Overlay Viewer on background click
function exitOverlay(e) {
  if (e.target.classList.contains('image-viewer-overlay')) {
    overlayContainer.classList.remove('show');
    setTimeout(() => {
      overlayContainer.style.display = 'none';
    }, 300);
  }
}

overlayContainer.addEventListener('click', exitOverlay);
overlayContainer.addEventListener('touchstart', exitOverlay);

// Hide Content Infospot on panorama-click
const allContentInfospot = document.querySelectorAll('.content-infospot');
function removeContentInfospot() {
  allContentInfospot.forEach((element) => {
    element.classList.remove('show');
  });
}

panoImage.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('panolens-canvas')) {
    removeContentInfospot();
  }
});

panoImage.addEventListener('touchstart', (e) => {
  if (e.target.classList.contains('panolens-canvas')) {
    removeContentInfospot();
  }
});

// Navigation Icon Hamburger
// (function() {}) sama dengan $(document).ready()
(function () {
  panoList.forEach((element, index) => {
    if (element.active) {
      panoActive = `panorama${index + 1}`;
    }
  });

  hamburgerIcon.addEventListener('click', (e) => {
    hamburgerIcon.classList.toggle('open');
    menuList.classList.toggle('show');
  });

  menuItem.forEach((element) => {
    element.addEventListener('click', (e) => {
      switch (e.target.dataset.panorama) {
        case 'home':
          viewer.setPanorama(panorama0);
          break;

        case 'laut-dangkal':
          viewer.setPanorama(panorama1);
          break;

        case 'gurun':
          viewer.setPanorama(panorama2);
          break;

        case 'sungai':
          viewer.setPanorama(panorama3);
          break;

        default:
          break;
      }
    });
  });
})();
// End of My Script---

// ---PanoLoading Event Listener---
let { isLoaded0, isLoaded1, isLoaded2, isLoaded3 } = false;
let progress, progressElement;
progressElement = document.getElementById('progress');

function onEnter(event, panoNumber) {
  progressElement.style.width = 0;
  progressElement.classList.remove('finish');

  removeContentInfospot();

  // Change title & active nav menu
  // Khusus pano0 tidak ada onProgress() kecuali di awal, jadi listener dipindahkan ke onEnter()
  switch (panoNumber) {
    case 0:
      if (isLoaded0) {
        navTitle.innerHTML = 'Virtual Field Trip';
        menuItem.forEach((element) => {
          element.classList.remove('active');
        });
        menuItem[panoNumber].classList.add('active');
      }
      break;

    case 1:
      if (isLoaded1) {
        navTitle.innerHTML = 'Ekosistem Laut Dangkal';
        menuItem.forEach((element) => {
          element.classList.remove('active');
        });
        menuItem[panoNumber].classList.add('active');
      }
      break;

    case 2:
      if (isLoaded2) {
        navTitle.innerHTML = 'Ekosistem Gurun';
        menuItem.forEach((element) => {
          element.classList.remove('active');
        });
        menuItem[panoNumber].classList.add('active');
      }
      break;

    case 3:
      if (isLoaded3) {
        navTitle.innerHTML = 'Ekosistem Sungai';
        menuItem.forEach((element) => {
          element.classList.remove('active');
        });
        menuItem[panoNumber].classList.add('active');
      }
      break;

    default:
      break;
  }
}

function onProgress(event, panoNumber) {
  progress = (event.progress.loaded / event.progress.total) * 100;
  progressElement.style.width = progress + '%';
  if (progress === 100) {
    progressElement.classList.add('finish');

    // Change title & active nav menu
    // Khusus pano0 tidak ada onProgress() kecuali di awal, jadi listener dipindahkan ke onEnter()
    switch (panoNumber) {
      case 0:
        if (!isLoaded0) {
          navTitle.innerHTML = 'Virtual Field Trip';
          menuItem.forEach((element) => {
            element.classList.remove('active');
          });
          menuItem[panoNumber].classList.add('active');
          isLoaded0 = true;
        }
        break;

      case 1:
        if (!isLoaded1) {
          navTitle.innerHTML = 'Ekosistem Laut Dangkal';
          menuItem.forEach((element) => {
            element.classList.remove('active');
          });
          menuItem[panoNumber].classList.add('active');
          isLoaded1 = true;
        }
        break;

      case 2:
        if (!isLoaded2) {
          navTitle.innerHTML = 'Ekosistem Gurun';
          menuItem.forEach((element) => {
            element.classList.remove('active');
          });
          menuItem[panoNumber].classList.add('active');
          isLoaded2 = true;
        }
        break;

      case 3:
        if (!isLoaded3) {
          navTitle.innerHTML = 'Ekosistem Sungai';
          menuItem.forEach((element) => {
            element.classList.remove('active');
          });
          menuItem[panoNumber].classList.add('active');
          isLoaded3 = true;
        }
        break;

      default:
        break;
    }
  }
}

// Khusus pano0 tidak ada onProgress() kecuali di awal, jadi listener dipindahkan ke onEnter()
panorama0.addEventListener('progress', (e) => onProgress(e, 0));
panorama0.addEventListener('enter', (e) => onEnter(e, 0));

panorama1.addEventListener('progress', (e) => onProgress(e, 1));
panorama1.addEventListener('enter', (e) => onEnter(e, 1));

panorama2.addEventListener('progress', (e) => onProgress(e, 2));
panorama2.addEventListener('enter', (e) => onEnter(e, 2));

panorama3.addEventListener('progress', (e) => onProgress(e, 3));
panorama3.addEventListener('enter', (e) => onEnter(e, 3));
// End of PanoLoading Event Listener
