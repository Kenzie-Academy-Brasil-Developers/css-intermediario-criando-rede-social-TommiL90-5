/* Desenvolva a lógica da página aqui */

const tagModal = document.getElementsByClassName("modal-homepage")[0];
const divModal = document.getElementById("show-post");

const buttonsControllersModal = document.querySelectorAll(
  "[data-control-modal]"
);
//console.log(tagModal);

for (let i = 0; i < buttonsControllersModal.length; i++) {
  buttonsControllersModal[i].addEventListener("click", (event) => {
    event.preventDefault();

    const buttonModalParent =
      buttonsControllersModal[i].parentElement.parentElement;
    console.log(buttonModalParent.children[0]);

    let modalId = buttonsControllersModal[i].getAttribute("data-control-modal");

    tagModal.innerHTML = "";
    tagModal.innerHTML = `   <div class="modal-header-homepage">${buttonModalParent.children[0].innerHTML} 
                                <button class="modal-close" id="not-show">X</button>
                                </div>
                                <h3 class="title-1">${buttonModalParent.children[1].children[0].innerHTML}</h3>
                                <p class ="text-1">${buttonModalParent.children[1].children[1].innerHTML}</p>
                            `;
    //console.log(tagModal);
    divModal.style.display = "flex";

    const closePost = document.getElementById("not-show");

    closePost.addEventListener("click", (e) => {
      e.preventDefault();

      divModal.style.display = "none";
    });
    // document.getElementById(modalId).classList.toggle("show-modal")
  });
}

//------------------

const buttonFollow = document.querySelectorAll(".btn-follow");

// console.log(buttonFollow)

for (let i = 0; i < buttonFollow.length; i++) {
  buttonFollow[i].addEventListener("click", (event) => {
    event.preventDefault();

    if (buttonFollow[i].innerText == "Seguir") {
      buttonFollow[i].classList.add("button__primary");
      buttonFollow[i].innerText = "Seguindo";
    } else {
      buttonFollow[i].classList.remove("button__primary");
      buttonFollow[i].innerText = "Seguir";
    }
  });
}
