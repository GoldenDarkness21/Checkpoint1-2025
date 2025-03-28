class TurismCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const Destino = this.getAttribute("Destino");
        const Duracion = this.getAttribute("Duracion");
        const Costo = this.getAttribute("Costo");
        const Descripcion = this.getAttribute("Descripcion") === "true";

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 10px;
                    margin: 5px;
                    border-radius: 5px;
                    background: white;
                    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                }
                button {
                    margin-top: 5px;
                    cursor: pointer;
                }
            </style>
            <div class="card">

            </div>
        `;

    }


    
}

export default TurismCard;

