today = new Date();
function getDate(){
    console.info('.notes',today);
}
getDate()

// Reference to an output container, use 'pre' styling for JSON output
var output = document.createElement('pre');
document.body.appendChild(output);

// Reference to native method(s)
var oldLog = console.log;

console.log = function( ...items ) {

    // Call native method first
    oldLog.apply(this,items);

    // Use JSON to transform objects, all others display normally
    items.forEach( (item,i)=>{
        items[i] = (typeof item === 'object' ? JSON.stringify(item,null,4) : item);
    });
    output.innerHTML += items.join(' ') + '<br />';

};

// You could even allow Javascript input...
function consoleInput( data ) {
    // Print it to console as typed
    console.log( data + '<div class=clearfix></div>' );
    try {
        console.log( eval( data ) );
    } catch (e) {
        console.log( e.stack );
    }
}
