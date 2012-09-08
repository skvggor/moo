window.addEvent('domready', function() {
    var element, i, text;
    element = document.id('container').getChildren();
    text = element.get('text');
    i = 0;

    element.morph({
        'text-align': 'center',
        'padding':'10',
        'width': '200'
    });

    element.addEvent('mouseover', function(event){
        element.morph({
           'color': '#FFF',
           'background-color': '#000' 
        });
        
        // i += 1;
        // this.empty();
        // this.set('text', i < 10 ? 'click{0' + i + ', ' + text + '}' : 'click{' + i + ', ' + text + '}');
    });

    element.addEvent('mouseout', function() {
        element.morph({
            'color': '#000',
            'background-color': '#FFF'
        });
    });

});