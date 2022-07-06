function computerPlay() {
    let rand;
    rand = Math.floor(Math.random() * 3);
    if(rand === 0) {
        return "Rock";
    }
    if(rand === 1) {
        return "Paper";
    }
    if(rand === 2) {
        return "Scissors";
    }
}