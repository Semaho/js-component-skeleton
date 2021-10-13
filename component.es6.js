/* export */ class ComponentES6JS
{
    #element;
    #child;

    
    constructor(element)
    {
        // DOM.
        this.#element = element;
        this.#child = this.#element.querySelector('[data-role="child"]');

        // Events.
        // Arrow function allows to access properties and methods in event listener.
        this.#child.addEventListener('click', (e) => this.onChildClick(e));

        console.log('[ES6.JS] Component initialized');
    }
 

    onChildClick(e)
    {
        console.log('[ES6.JS] Child clicked', e);
        this.saySomething();
    }


    saySomething()
    {
        console.log('[ES6.JS] Hello !');
    }
}


/**
 * Initialize each instance when DOM is ready.
 */

document.addEventListener("DOMContentLoaded", function()
{
    // Creates one instance per component,
    // allows to have the same component multiple times on same page.
    // Preference: target a data attribute for distinction between style and functionality.
    document.querySelectorAll('[data-component="es6js"]').forEach(element => new ComponentES6JS(element));
});