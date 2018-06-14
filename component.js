var Component = function(elem)
{
    // DOM.
    this.$elem  = $(elem);
    this.$child = this.$elem.find('.some-selector');
 
    // Events.
    // Using $.proxy allows to access Component properties with 'this' in called fn.
    this.$child.on('click', $.proxy(this.anyFunction, this));
};


Component.prototype.anyFunction = function(event)
{
    // Can access this.$elem or any other defined attribute/function.
    // Use event.currentTarget in order to work with event source element.
};


$(document).ready(function()
{
    // Creates one instance per component,
    // allows to have the same component multiple times on same page.
    // Preference: target a data attribute for distinction between style and functionality.
    $('[data-component="mycomponent"]').each(function() {
        var comp = new Component(this);
    });
});