// Event Listener
// listen for the keydown event, awhich runs the function
window.addEventListener('keydown', function(e){
    // console.log(e.keyCode) displays the corresponding keycode
    // get the corresponding audio element for the specific key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // select the specific key
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    // if a key doesn't have a corresponding audio, stop the function from running
    if(!audio) return;

    // adds the class 'playing' to the key selected
    key.classList.add('playing');
    // before we call the audio to play, we rewind it to the start so if we hit it over and over, it'll play from the start
    audio.CurrentTime = 0;
    audio.play();
});

// create a function that will remove the transition from the keys
function removeTransition(e){
    // skip if property name is not 'transform'
    if(e.propertyName !== 'transform') return; 
    // this gets the elemnet that was called on and removes the class
    this.classList.remove('playing')
}
// create a transitionend event that stops the key transitions once keyed down
const keys = document.querySelectorAll('.key')
// loop each key in the node list
// listen to the transitionend event, and run the function
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


