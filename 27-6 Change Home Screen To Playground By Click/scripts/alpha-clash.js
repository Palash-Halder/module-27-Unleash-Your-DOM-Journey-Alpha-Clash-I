/*
function play(){
    // Step-1: hide the home screen. To hide the screen add the class hidden to the home screen

    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    
    // To see the class list in homeSection
    //console.log(homeSection.classList);

    //console.log('Play button connected');


    // show the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
    // To see the class list in playgroundSection
    //console.log(playgroundSection.classList);
}
*/

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}