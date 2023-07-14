var topics = ['HTML', 'CSS', 'Git', 'JavaScript']; //an array
var randomTopic = topics[Math.floor(Math.random() * topics.length)]; //randomize our selection

function listTopics() { //function called "listTopics" to set instructions for the computer to perform certain tasks.
    for (var x = 0; x < topics.length; x++) { //for loop to play all items in the array based on x
        console.log(topics[x]); //x equals 3
  }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();