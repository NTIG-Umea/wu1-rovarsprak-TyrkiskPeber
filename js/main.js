document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket
    var translate = function(text) {
        var string = text.toLowerCase();
        var vowels = ["a", "e", "i", "o", "u", " ", "å", "ä", "ö"];
        var y = "";
        for (i = 0; i < string.length; i++) {
           var current = string.charAt(i); 
          if (vowels.indexOf(current) != -1) {
              y = (y + (current));
          }
          else {
              y = (y + (current + "o" + current);
          }
        }
        return y;
      }
    return text;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = y;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
