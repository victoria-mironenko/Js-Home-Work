import { Component } from "./core/Component.js";

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };

        // this.toggleMenu = this.toggleMenu.bind(this);
        // или привязать контекст ^^^, или использовать стрелочную функцию
    }

    toggleMenu = () => {
        this.setState((state) => {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        })
    }

    componentDidMount() {
        window.addEventListener('toggle-menu', this.toggleMenu);
    }

    componentWillUnmount() {
        window.removeEventListener('toggle-menu', this.toggleMenu);
    }

    static get observedAttributes() {
        return ['items']
    }

    render() {
        const items = JSON.parse(this.props.items);
        return `
        <nav class="${this.state.isOpen ? 'open' : 'closed'} navbar">
            <ul class="navbar-nav">
                ${items.map((item) => {
                    return `
                        <li class="nav-li">
                            <a href="${item.href}">${item.label}</a>
                        </li> 
                    `       
                }).join('')}
            </ul>
        </nav>    
        
        `
        
    }




}

customElements.define('my-menu', Menu);