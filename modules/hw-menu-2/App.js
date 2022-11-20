import { Component } from "./core/Component.js";
import './Button.js';
import './Menu.js'

export class App extends Component {
    constructor() {
        super();
        this.state = {
            menuItems: [
                {label: 'link 1', href: 'https://www.google.com'},
                {label: 'link 2', href: 'https://lingualeo.com'},
                {label: 'link 3', href: 'https://www.multitran.com'},
        ]
        };
        this.props = {};
        
    }


    render() {
        return `
        <my-button eventtype="toggle-menu" content="push"></my-button>
        <my-menu items='${JSON.stringify(this.state.menuItems)}'></my-menu>

        `
        
    }

    
}

customElements.define('my-app', App)





