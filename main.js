var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}
var storyText = 'It was 94 farenheit outside, so 1/:insertx: went for a walk. When they got to 2/:inserty:, they stared in horror for a few moments, then 3/:insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['WWilly the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
var newStory;
randomize.addEventListener('click', result);

function result() {
    newStory = storyText;
    var xItem=randomValueFromArray(insertX),yItem=randomValueFromArray(insertY),zItem=randomValueFromArray(insertZ);

    if(customName.value != '') {
        var name = customName.value;
        newStory = newStory.replace(/Bob/g,name);
    }

    if(document.getElementById("uk").checked) {
        var weight = Math.round(300);
        var temperature =  Math.round(94);

    }
    newStory = newStory.replace(/:insertx/g,xItem);
    newStory = newStory.replace(':inserty',yItem);
    newStory = newStory.replace(':insertz',zItem);
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
