// Import stylesheets
import './style.css';

// Write Javascript code!

var kontaktbereich = document.getElementById('kontakt-bereich')

var submitButton = document.getElementById('kontaktformular-submit')
submitButton.addEventListener('click', function(event){
var mail = document.getElementById('kontaktformular-mail')
var sinfonie = document.getElementById('kontaktformular-sinfonie')
var inhalt = document.getElementById('kontaktformular-inhalt')
console.log(inhalt)

var kontakt = ''

kontakt += '<section class="kontakt">'

kontakt += '<span>' + mail.value + ' - Lieblingssinfonie: ' + sinfonie.value + '</span>'

kontakt += '<p>' + inhalt.value + '</p>'

kontakt += '</section>'

kontaktbereich.innerHTML += kontakt

})