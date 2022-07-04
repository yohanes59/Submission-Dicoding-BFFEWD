class AppBar extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML =`
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                color: white;
                background: linear-gradient(-45deg, #ccf9ff, #7ce8ff, #55d0ff, #00acdf);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
            h2 {
                padding: 16px;
            }
            img {
                max-width: 40px;
                float: left;
                margin: 8px 16px;
            }
        </style>
        <img src="https://img.freepik.com/free-vector/sliced-vegetables-realistic-concept-with-tomato-pepper-onion-vector-illustration_1284-16245.jpg?w=740" alt="recipe-logo">
        <h2>Recipe Finder</h2>
        `;
    }
}

customElements.define("app-bar", AppBar);