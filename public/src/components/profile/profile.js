class MyProfile extends HTMLElement {
   ///metodo para declara que atributos/parametros
    //Vamos a utilizar en nuestra clase
    
    static get ObservedAttributes(){
        return ["uuid", "name", "lastname", "age"];

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
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/profile/styles.css">

        <section>
        <p>ID User: ${this.uuid} </p>
        <h1>Name: ${this.name} Username: ${this.username} </h1>
        <p>this is one of our users</p>
        <span><strong>Email: ${this.email}</strong><span>
        </section>
        `
    }
}

customElements.define("my-profile", MyProfile);
export default MyProfile;