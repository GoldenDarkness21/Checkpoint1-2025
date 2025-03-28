class TurismCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['Destino', 'Duracion', 'Costo', 'Descripcion', 'Actividades', 'reservado', 'imagen', 'calificacion', 'alojamiento', 'guia_incluido'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const destino = this.getAttribute("Destino");
        const duracion = this.getAttribute("Duracion");
        const costo = this.getAttribute("Costo");
        const descripcion = this.getAttribute("Descripcion");
        const actividades = this.getAttribute("Actividades");
        const reservado = this.getAttribute("reservado");
        const imagen = this.getAttribute("imagen");
        const calificacion = this.getAttribute("calificacion");
        const alojamiento = this.getAttribute("alojamiento");
        const guia_incluido = this.getAttribute("guia_incluido");

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

        this.shadowRoot.querySelector("#toggleStatus").addEventListener("click", () => {
            this.toggleStatus();
        });
    }

    toggleStatus() {
        const newStatus = this.getAttribute("Si") === "true" ? "false" : "true";
        this.setAttribute("Si", newStatus);
        this.dispatchEvent(new CustomEvent("statusChanged", { detail: { attended: newStatus, element: this }, bubbles: true }));
        this.render();
    }
    
}

export default TurismCard;

