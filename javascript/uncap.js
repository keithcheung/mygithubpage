function uncapString() {
    var textbox = document.getElementById('cappedString');
    uncappedString = textbox.value;
    output = '';
    for (var i = 0, len = uncappedString.length; i < len; i++) {
        var character = uncappedString[i];
        if (character == character.toLowerCase()) {
          output = output + character.toUpperCase();
        } else {
          output = output + character.toLowerCase();
        }
    } 
    document.getElementById('newString').innerText = output;
}