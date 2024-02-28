const gallery = document.querySelectorAll('.card-image');

// Pagination
const previousPageButton = document.getElementById('previousPage');
const nextPageButton = document.getElementById('nextPage');
let startIndex = 0;
let itemsPerPage = 8;

function hideAllImages() {
  gallery.forEach(function(image) {
    image.style.display = 'none';
  });
}

function showCurrentPage() {
    let endIndex = Math.min(startIndex + itemsPerPage, gallery.length);
    for (var i = startIndex; i < endIndex; i++) {
      gallery[i].style.display = 'block';
    }
    if (startIndex === 0) {
      previousPageButton.style.display = 'none';
    } else {
      previousPageButton.style.display = 'block';
    }
    nextPageButton.style.display = endIndex < gallery.length ? 'block' : 'none';
  }

function nextPage() {
  startIndex += itemsPerPage;
  hideAllImages();
  showCurrentPage();
}

function previousPage() {
    startIndex = Math.max(0, startIndex - itemsPerPage);
    hideAllImages();
    showCurrentPage();
    nextPageButton.style.display = 'block';
  }

hideAllImages();
showCurrentPage();

nextPageButton.addEventListener('click', nextPage);
previousPageButton.addEventListener('click', previousPage);

// Image Preview
const modalOverlay = document.getElementById("modal-overlay");
const modal = modalOverlay.children[0];
let modalTitle = modal.children[1];
let modalImage = modal.childNodes[5];

gallery.forEach(card => {
  card.addEventListener("click", () => {
    let title = card.childNodes[3];
    let image = card.childNodes[1]
    modalImage.src = image.src;
    modalTitle.textContent = title.textContent;
    displayModal();
  });
});

function displayModal() {
  const btnCloseModal = document.getElementById("close-modal");
  modalOverlay.addEventListener("click", closeModal);
  modalOverlay.classList.add("display--modal");
  btnCloseModal.addEventListener("click", closeModal);
}

function closeModal() {
  modalOverlay.classList.remove("display--modal");

}