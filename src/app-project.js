let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let randomDomain = ['.com', '.net', '.us', '.io'];

for (let i = 0; i <= pronoun.length -1; i++){
    for (let j = 0; j <= adj.length -1; j++){
        for (let y = 0; y <= noun.length -1; y++){
            let randomIndex = Math.floor(Math.random() * randomDomain.length);
            console.log(pronoun[i] + adj[j] + noun[y] + randomDomain[randomIndex]);
        }
    }
}