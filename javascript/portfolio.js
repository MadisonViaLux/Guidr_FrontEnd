class Dropdown{
    constructor(element){

        this.element = element;
        this.button = this.element.querySelector('.dropdown-option');
        this.content = document.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => this.toggleOptions());

    }

    toggleOptions(){this.content.classList.toggle('hide-dropdown')};
}


const dropdowns = document.querySelectorAll('.dropdowns');

dropdowns.forEach(element => new Dropdown(element));


