function openModal(src) {
    const modal = document.getElementById("modal1");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = src;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal1");
    modal.style.display = "none";
}