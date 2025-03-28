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
        const Descripcion = this.getAttribute("Descripcion");
        const Actividades = this.getAttribute("Actividades");
        const Disponibilidad = this.getAttribute("Disponibilidad");
        const imgen = this.getAttribute("imagen");
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
        this.setAttribute("attended", newStatus);
        this.dispatchEvent(new CustomEvent("statusChanged", { detail: { attended: newStatus, element: this }, bubbles: true }));
        this.render(); // Asegura que el contenido se actualice
    }
    
}

export default PatientCard;

