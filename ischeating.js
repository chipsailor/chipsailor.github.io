var element = new Image;
var cheating = false;

element.__defineGetter__("id", function() {
   cheating = true; // This only executes when devtools is open.
});

setInterval(function() {
    cheating = false;
    console.log(element);
    document.getElementById('output').innerHTML += (cheating ? "dev tools is open\n" : "dev tools is closed\n");            
}, 1000);