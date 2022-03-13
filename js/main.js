const panoImage = document.querySelector('.panorama-image');
const lakePano = '../images/pano2.jpg';
const shallowSeaPano = '../images/laut-dangkal.jpg';
const dessertPano = '../images/dessert.jpg';
const riverPano = '../images/sungai.jpeg';

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
const panorama1 = new PANOLENS.ImagePanorama(lakePano);
const panorama2 = new PANOLENS.ImagePanorama(shallowSeaPano);
const panorama3 = new PANOLENS.ImagePanorama(dessertPano);
const panorama4 = new PANOLENS.ImagePanorama(riverPano);

const viewer = new PANOLENS.Viewer({
  container: panoImage,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  autoRotateActivationDuration: 10000,
  // initialLookAt: new THREE.Vector3(4365.89, 221.37, 2410.68), // tidak bisa dipakai, panolens lama:(
  controlBar: false,
  output: 'console',
});

/* --Infospot code-- */
// ---Infospot Pano 1
const infospot1 = new PANOLENS.Infospot();
infospot1.position.set(4358.64, 483.64, 2386.35);
infospot1.addHoverText('Welcome to Manson Lake');

const infospot2 = new PANOLENS.Infospot();
infospot2.position.set(4961.67, 401.3, -416.92);
infospot2.addHoverElement(document.getElementById('desc-container'), -200);

const infospot3 = new PANOLENS.Infospot();
infospot3.position.set(-3523.79, -620.04, 3477.75);
// infospot3.position.set(-2032.76, -215.69, -4558.7);
infospot3.addHoverElement(document.querySelector('.infospot-3'), -55);
infospot3.lockHoverElement();

const infospot4 = new PANOLENS.Infospot();
infospot4.position.set(385.77, 427.56, -4960.2);
infospot4.addHoverElement(document.querySelector('.infospot-4'), -55);
infospot4.lockHoverElement();

// ---Infospot Pano 2

// ---Infospot Pano 3

// ---Infospot Pano 4
const infospotPengamat = new PANOLENS.Infospot();
infospotPengamat.position.set(-4878.99, 33.45, 1078.34);
infospotPengamat.addHoverText('Pengamat');

// PanoLoading Event Listener
let progress, progressElement;
progressElement = document.getElementById('progress');

function onEnter(event) {
  progressElement.style.width = 0;
  progressElement.classList.remove('finish');
}

function onProgress(event) {
  progress = (event.progress.loaded / event.progress.total) * 100;
  progressElement.style.width = progress + '%';
  if (progress === 100) {
    progressElement.classList.add('finish');
  }
}

panorama1.addEventListener('progress', onProgress);
panorama1.addEventListener('enter', onEnter);
panorama2.addEventListener('progress', onProgress);
panorama2.addEventListener('enter', onEnter);
panorama3.addEventListener('progress', onProgress);
panorama3.addEventListener('enter', onEnter);
panorama4.addEventListener('progress', onProgress);
panorama4.addEventListener('enter', onEnter);
// End of PanoLoading Event Listener

// Infospot Add to each Pano
panorama1.add(infospot1, infospot2, infospot3, infospot4);
panorama4.add(infospotPengamat);

/* --End of Infospot code-- */

viewer.add(panorama1, panorama2, panorama3, panorama4);

// Panorama Link
panorama1.link(panorama2, new THREE.Vector3(4815.14, -425.18, -1247.19));
panorama1.link(panorama3, new THREE.Vector3(4974.48, 100.5, 411.7));
panorama1.link(panorama4, new THREE.Vector3(100.13, 80.29, 4991.6));
panorama2.link(panorama1, new THREE.Vector3(2328.12, 2263.85, -3796.19));
panorama3.link(panorama1, new THREE.Vector3(4351.12, 1126.62, -2172.69));
panorama4.link(panorama1, new THREE.Vector3(1411.58, -361.02, -4776.39));

// End of Panorama Code---
//

// My Script---
const infospotEl = document.querySelectorAll('.infospot');

// toggle infospot content + Event Listener image viewer
const overlayContainer = document.querySelector('.image-viewer-overlay');
const imageOverlay = document.querySelector('img.image-zoom');

infospotEl.forEach((el) => {
  el.addEventListener('click', (e) => {
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
        img.addEventListener('click', (e) => {
          imageOverlay.src = e.target.src;
          imageOverlay.alt = e.target.src;
          console.log(img);
          console.log(img.src);
          overlayContainer.style.display = 'flex';
          setTimeout(() => {
            overlayContainer.classList.add('show');
          }, 1);
        });
      }
    }
  });
});

// Exit Overlay Viewer on background click
overlayContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('image-viewer-overlay')) {
    overlayContainer.classList.remove('show');
    setTimeout(() => {
      overlayContainer.style.display = 'none';
    }, 300);
  }
});

// Hide Content Infospot on panorama-click
const allContentInfospot = document.querySelectorAll('.content-infospot');
panoImage.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('panolens-canvas')) {
    allContentInfospot.forEach((element) => {
      element.classList.remove('show');
    });
  }
});
