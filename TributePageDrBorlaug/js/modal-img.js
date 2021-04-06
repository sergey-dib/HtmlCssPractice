

function openModal(numImg){
    let modalWindow = document.getElementById("imageModal");
    // let CurrentImg = document.getElementById("imageForOpen");
    let modalImg = document.getElementById("OpenImage");
    let captionText = document.getElementById("modal-caption");
    let imgs = document.getElementsByClassName("photo-element");

    let CurrentImg = imgs[numImg - 1].children[0];

    modalWindow.style.display = "block";
    modalImg.src = CurrentImg.src;
    captionText.innerHTML = CurrentImg["alt"];
}


function closeModal(){
    let modalWindow = document.getElementById("imageModal");
    modalWindow.style.display = "none";
}
