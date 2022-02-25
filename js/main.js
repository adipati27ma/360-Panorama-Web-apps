const panoImage = document.querySelector('.panorama-image');
const lakePano = '../images/pano2.jpg';

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
const panorama = new PANOLENS.ImagePanorama(lakePano);
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  output: 'console',
});

const infospot = new PANOLENS.Infospot();
infospot.position.set(4358.64, 483.64, 2386.35);
infospot.addHoverText('Welcome to Manson Lake');

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

panorama.add(infospot);
panorama.add(infospot2);
panorama.add(infospot3);
panorama.add(infospot4);
viewer.add(panorama);
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
