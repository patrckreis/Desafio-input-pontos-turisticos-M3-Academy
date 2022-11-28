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
            {
                name: "Centro Histórico de Paraty",
                path: "assets/centro-paraty.png",
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
        if (window.screen.width > 1024) {
            this.slickAdd();
        }

        this.renderListItems();
    }

    selectors() {
        this.output = document.querySelector("#output");
        this.imgInp = document.querySelector("#input-image");
        this.items = document.querySelector(".cards-result-render");
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
        this.output.classList.remove("display-none");
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
        <li data-test="container-item-list" class="card-li">
            <div data-test="item-list" class="image-container">
            <img data-test="image-item-list" class="image-container-render" src=${item.path} />
            </div>
            <div class="info-container-div">
                <div data-test="title-item-list" class="tittle-container">
                    <span   class="item-title-render">${item.name}</span>
                </div>

                <div data-test="description-item-list" class="description-container">
                    <p   class="item-description-render">${item.description} </p>
                </div>
            </div>


        </li>
      `;
        });
        if (window.screen.width > 1024) {
            this.removeslick();
        }
        this.items.innerHTML = titleStructure;

        if (window.screen.width > 1024) {
            this.slickAdd();
        }
    }

    resetInputs() {
        this.output.classList.add("display-none");
        this.output.src = "";
        this.imgInp.value = "";
        this.titleInput.value = "";
        this.descriptionInput.value = "";
        this.uploadedImage = "";
    }

    slickAdd() {
        $(".cards-result-render").slick({
            variablewidth: true,
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
        });
    }

    removeslick() {
        $(".cards-result-render").slick("unslick");
    }
}
