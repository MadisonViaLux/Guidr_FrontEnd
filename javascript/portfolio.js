// class Dropdown{
//     constructor(element){

//         this.element = element;
//         this.button = this.element.querySelector('.dropdown-option');
//         this.content = document.querySelector('.dropdown-content');

//         this.button.addEventListener('click', () => this.toggleOptions());

//     }

//     toggleOptions(){this.content.classList.toggle('hide-dropdown')};
// }


// const dropdowns = document.querySelectorAll('.dropdowns');

// dropdowns.forEach(element => new Dropdown(element));



class DocLink{
    constructor(element){
        this.element = element;
        this.data = document.querySelector(`.dropdown-option[data-tab='${element.dataset.tab}']`);
        this.displayChunk = document.querySelector(`.dropdown-content[data-tab='${element.dataset.tab}']`);

        this.newElement = new DocItem(this.displayChunk);

        element.addEventListener('click', () => this.select());
    };

    select(){
        this.newElement.select();
    }

}


class DocItem{
    constructor(element){
        this.element = element;
    }

    select(){
        const content = document.querySelectorAll('.dropdown-content');
        Array.from(content).forEach(content => content.classList.remove('display-block'));
        this.element.classList.add('display-block');
    }

}










const dropdowns = document.querySelectorAll('.dropdown-option');

dropdowns.forEach(element => new DocLink(element));