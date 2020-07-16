// Import stylesheets
import('./style.css').catch(() => console.log('Außerhalb von StackBlitz'));

// Write Javascript code!

var kontaktaufnahmen = document.getElementById('kontakt-aufnahmen')

var submitButton = document.getElementById('kontaktformular-submit')
submitButton.addEventListener('click', function(event){
var mail = document.getElementById('kontaktformular-mail')
var sinfonie = document.getElementById('kontaktformular-sinfonie')
var inhalt = document.getElementById('kontaktformular-inhalt')

var kontakt = ''

kontakt += '<section class="kontakt">'

kontakt += '<span>' + mail.value + ' - Lieblingssinfonie: ' + sinfonie.value + '</span>'

kontakt += '<p>' + inhalt.value + '</p>'

kontakt += '</section>'

kontaktaufnahmen.innerHTML += kontakt

})