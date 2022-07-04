class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid h-100">
            <div class="row justify-content-center align-content-center h-100">
                <div class="col-md-7">
                    <h4 class="text-center">find secret recipes from around the world</h4>
                    <div id="search-container" class="search-container input-group mt-4">
                        <input placeholder="Search recipe name" id="searchElement" type="search" class="form-control">
                        <button id="searchButtonElement" type="submit" class="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}



customElements.define("search-bar", SearchBar);

{/* <style>
            .search-container {
                max-width: 1200px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
            }
            
            .search-container > input {
                width: 83%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid cornflowerblue;
                font-weight: bold;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid cornflowerblue;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: cornflowerblue;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 15%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: cornflowerblue;
                color: white;
                border: 0;
                text-transform: uppercase;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                }
            }
        </style> */}