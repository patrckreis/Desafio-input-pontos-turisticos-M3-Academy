export class TuristicForm {
    constructor() {
        this.list = [
            {
                name: "Pão de Açúcar",
                path: "assets/pao-de-acucar.png",
                description:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
            {
                name: "Cristo Redentor",
                path: "assets/cristo-redentor.png",
                description:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
            {
                name: "Pão de Açúcar",
                path: "assets/ilha-grande.png",
                description:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
            {
                name: "Centro Histórico de Paraty",
                path: "assets/centro-paraty.png",
                description:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
        ];
        this.uploadedImage = "";
        this.selectors();
        this.events();
        this.renderListItems();
    }

    selectors() {
        this.output = document.querySelector("#output");
        this.imgInp = document.querySelector("#input-image");
        this.items = document.querySelector(".title-result-render");
        this.form = document.querySelector(".turistic-form");
        this.descriptionInput = document.querySelector(
            ".turistic-form-description-placeholder"
        );
        this.titleInput = document.querySelector(
            ".turistic-form-title-placeholder"
        );
    }

    events() {
        this.imgInp.addEventListener("change", this.loadFile.bind(this));
        this.form.addEventListener("submit", this.addItemToList.bind(this));
    }

    loadFile(event) {
        this.uploadedImage = URL.createObjectURL(event.target.files[0]);
        console.log(this.uploadedImage);
        output.src = this.uploadedImage;
    }

    addItemToList(event) {
        event.preventDefault();

        const itemDescription = event.target["item-description"].value;
        const itemtitle = event.target["item-title"].value;
        if (
            itemtitle != "" &&
            itemDescription != "" &&
            this.uploadedImage != ""
        ) {
            const item = {
                path: this.uploadedImage,
                name: itemtitle,
                description: itemDescription,
            };
            this.list.push(item);

            this.renderListItems();
            this.resetInputs();
        }
    }

    renderListItems() {
        console.log(this.list);
        let titleStructure = "";
        this.list.forEach(function (item) {
            titleStructure += `
        <li class="card-li">
            <img src=${item.path} />
            <div class="info-container-div"><span  class="item-title-render">${item.name}</span>
            <p class="item-description-render">${item.description} </p></div>

        </li>
      `;
        });

        this.items.innerHTML = titleStructure;
    }

    resetInputs() {
        this.output.src = "";
        this.imgInp.value = "";
        this.titleInput.value = "";
        this.descriptionInput.value = "";
        this.uploadedImage = "";
    }
}

//INPUT DE IMAGEM

/* const loadFile = function (event) {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src); // free memory
    };
};

imgInp.onchange = (evt) => {
    const [file] = imgInp.files;
    if (file) {
        blah.src = URL.createObjectURL(file);
    }
}; */

///////////////////////////////////////////////  CODIGO SEM CONSTRUCTO
///////////////////////////////////////////////  CODIGO SEM CONSTRUCTO

/* document.addEventListener("DOMContentLoaded", function () {
    const list = [];
    const items = document.querySelector(".title-result-render");
    const form = document.querySelector(".turistic-form");
    const descriptionInput = document.querySelector(
        ".turistic-form-description-placeholder"
    );
    const titleInput = document.querySelector(
        ".turistic-form-title-placeholder"
    );

    form.addEventListener("submit", addItemToList);

    function addItemToList(event) {
        event.preventDefault();

        const itemtitle = event.target["item-title"].value;
        if (itemtitle != "") {
            const item = {
                name: itemtitle,
            };
            list.push(item);

            renderListItems();
            resetInputs();
        }
    }

    function renderListItems() {
        let titleStructure = "";
        list.forEach(function (item) {
            titleStructure += `
        <li class="title-item">
          <span>${item.name}</span>
        </li>
      `;
        });

        items.innerHTML = titleStructure;
    }

    function resetInputs() {
        titleInput.value = "";
    }
});

const loadFile = function (event) {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src); // free memory
    };
};

imgInp.onchange = (evt) => {
    const [file] = imgInp.files;
    if (file) {
        blah.src = URL.createObjectURL(file);
    }
}; */
