/* export */ class ComponentES6JS
{
    #element;
    #child;

    
    constructor(element)
    {
        this.#element = element;
        this.#child = this.#element.querySelector('[data-role="child"]');

        // Events.
        this.#child.addEventListener('click', (e) => this.onChildClick(e));

        console.log('[ES6.JS] Component initialized');
    }
 

    onChildClick(e)
    {
        console.log('[ES6.JS] Child clicked');
        console.log('[ES6.JS] Event: ', e);
    }
}


/**
 * Initialize each instance when DOM is ready.
 */

document.addEventListener("DOMContentLoaded", function()
{
    document.querySelectorAll('[data-component="es6js"]').forEach(element => new ComponentES6JS(element));
});