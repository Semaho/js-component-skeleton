/* export */ class ComponentES6TS
{
    private element: HTMLElement;
    private child: HTMLElement;

    
    constructor(element: HTMLElement)
    {
        this.element = element;
        this.child = this.element.querySelector('[data-role="child"]');

        // Events.
        this.child.addEventListener('click', (e: MouseEvent) => this.onChildClick(e));

        console.log('[ES6.TS] Component initialized');
    }
 

    onChildClick(e: MouseEvent)
    {
        console.log('[ES6.TS] Child clicked');
    }
}


/**
 * Initialize each instance when DOM is ready.
 */

document.addEventListener("DOMContentLoaded", function()
{
    document.querySelectorAll('[data-component="es6js"]').forEach(element => new ComponentES6TS(<HTMLElement>element));
});