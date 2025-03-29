
class TurismApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <turism-card></turism-card>
        `;
    }
}

export default TurismApp;

