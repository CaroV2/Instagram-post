class MyProfile extends HTMLElement {
   ///metodo para declara que atributos/parametros
    //Vamos a utilizar en nuestra clase
    static get ObservedAttributes(){
        return ["id", "name", "lastname", "age"];

    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    //Se ejecuta cuando la clase está
    //montado en nuestra pagina/html
    connectedCallback(){
        this.render()
    }

    //Metodo que se encarga de ejecutarse
    //si algun valor cambia
    attributeChangedCallback(propName,newValue){
        this[propName] = newValue;
        this.render();
    }

    mount() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <p>ID User: ${this.id} </p>
        <h1>Name: ${this.name} Username: ${this.username} </h1>
        <p><strong>${this.email}</strong></p>
        </section>
        `
    }
}

customElements.define("my-profile", MyProfile);
export default MyProfile;