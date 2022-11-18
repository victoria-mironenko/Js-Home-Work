import { Component } from "./core/Component.js";
import './Button.js';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            menuItems: [
                {label: 'link 1', href: 'https://www.google.com'},
                {label: 'link 2', href: 'https://lingualeo.com'},
                {label: 'link 3', href: 'https://www.multitran.com'},
        ]
        };
        this.props = {};
    }


    toggleMenu() {
        this.setState((state) => {
            return {
                ...state,
                isOpen: state.isOpen ? false : true
            }
        })

    }


    componentDidMount() {
        this.addEventListener('toggle-menu', this.toggleMenu);
    }

    componentWillUnmount() {
        this.removeEventListener('toggle-menu', this.toggleMenu);
    }

    static get observedAttributes() {
        return ['items']
    }

    render() {
        return `

        <nav class="${this.state.isOpen? 'open': 'closed'} navbar" >
            <div class="container-fluid hidden">
                <ul class="navbar-nav">
                    ${this.state.menuItems.map((item) => {
                        return`
                        <li class="nav-item">
                            <a class="nav-link" href="${JSON.stringify(item.href)}">${JSON.stringify(item.label)}</a>
                        </li>
                        `
                    }).join('')}
                </ul>
            </div>
        </nav>

        <my-button eventtype="toggle-menu" content="push"></my-button>

        `
    }
}

customElements.define('my-app', App)





