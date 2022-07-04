import "./recipe-item.js";

class RecipeList extends HTMLElement {
    connectedCallback(){
        this.setAttribute("class", "row justify-content-center");
    }

    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }

    render() {
        this.innerHTML="";
        this._recipes.forEach(recipe => {
            const recipeItemElement = document.createElement("recipe-item");
            recipeItemElement.recipe = recipe
            recipeItemElement.setAttribute("class", "col-md-4");
            this.appendChild(recipeItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <h2 class="placeholder">${message}</h2>
        `;
    }
}

customElements.define("recipe-list", RecipeList);