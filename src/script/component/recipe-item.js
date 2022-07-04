class RecipeItem extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="card mb-3 w-100">
            <div class="row g-0 justify-content-center">
                <div class="col-6 col-md-4">
                    <img src="${this._recipe.strMealThumb}" class="img-fluid rounded-start" alt="${this._recipe.strMeal} picture" />
                </div>
                <div class="col-md-8">
                    <div class="card-body text-center text-md-start">
                        <h5 class="card-title">
                            <a target="_blank" rel="noopener noreferrer" class="text-decoration-none text-dark" href="${this._recipe.strYoutube}">
                                ${this._recipe.strMeal}
                            </a>
                        </h5>
                        <h5 class="card-title">
                            Category : ${this._recipe.strCategory}
                        </h5>
                        <h5 class="card-title">
                            Country : ${this._recipe.strArea}
                        </h5>
                    </div>
                </div>
                <h5 class="card-title mt-1 ps-1 pe-1">
                    Intructions<br>${this._recipe.strInstructions}
                </h5>
            </div>
        </div>`;
  }
}

customElements.define("recipe-item", RecipeItem);
