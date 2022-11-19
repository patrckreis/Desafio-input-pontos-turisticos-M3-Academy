export class TuristicForm {
    constructor() {
        this.list = [];
        this.selectors();
        this.events();
    }
    selectors() {
        this.items = document.querySelector(".tittle-result-render");
        this.form = document.querySelector(".turistic-form");
        this.descriptionInput = document.querySelector(
            ".turistic-form-description-placeholder"
        );
        this.tittleInput = document.querySelector(
            ".turistic-form-tittle-placeholder"
        );
    }

    events() {
        this.form.addEventListener("submit", this.addItemToList.bind(this));
    }

    addItemToList(event) {
        event.preventDefault();

        const itemTittle = event.target["item-tittle"].value;
        if (itemTittle != "") {
            const item = {
                name: itemTittle,
            };
            this.list.push(item);

            this.renderListItems();
            this.resetInputs();
        }
    }

    renderListItems() {
        let tittleStructure = "";
        this.list.forEach(function (item) {
            tittleStructure += `
        <li class="tittle-item">
          <span>${item.name}</span>
        </li>
      `;
        });

        this.items.innerHTML = tittleStructure;
    }

    resetInputs() {
        this.tittleInput.value = "";
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
    const items = document.querySelector(".tittle-result-render");
    const form = document.querySelector(".turistic-form");
    const descriptionInput = document.querySelector(
        ".turistic-form-description-placeholder"
    );
    const tittleInput = document.querySelector(
        ".turistic-form-tittle-placeholder"
    );

    form.addEventListener("submit", addItemToList);

    function addItemToList(event) {
        event.preventDefault();

        const itemTittle = event.target["item-tittle"].value;
        if (itemTittle != "") {
            const item = {
                name: itemTittle,
            };
            list.push(item);

            renderListItems();
            resetInputs();
        }
    }

    function renderListItems() {
        let tittleStructure = "";
        list.forEach(function (item) {
            tittleStructure += `
        <li class="tittle-item">
          <span>${item.name}</span>
        </li>
      `;
        });

        items.innerHTML = tittleStructure;
    }

    function resetInputs() {
        tittleInput.value = "";
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
