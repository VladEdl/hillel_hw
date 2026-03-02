import Model from './notes/Model.js';
import View from './notes/View.js';
import Controller from './notes/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new Controller(new Model(), new View());
});