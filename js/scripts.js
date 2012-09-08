window.addEvent('domready', function() {
    var element, i, text;
    element = document.id('container').getChildren();
    text = element.get('text');
    i = 0;

    element.addEvent('click', function(){
        i += 1;
        this.empty();
        this.set('text', 'click{' + i + ', ' + text + '}');
    });
});