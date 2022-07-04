import '../component/recipe-list.js';
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const recipeListElement = document.querySelector("recipe-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchRecipe(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    const renderResult = results => {
        recipeListElement.recipes = results;
    }
    
    const fallbackResult = message => {
        recipeListElement.renderError(message);
    };
    
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;