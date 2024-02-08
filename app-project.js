let pronoun = ["the", "our"];
let adjective = ["great", "big"];
let noun = ["jogger", "racoon"];

let domains = [".com", ".net", ".us", ".io"];

for (let i = 0; i <= pronoun.length - 1; i++) {
  for (let j = 0; j <= adjective.length - 1; j++) {
    for (let y = 0; y <= noun.length - 1; y++) {
      let randomIndexForDomain = Math.floor(Math.random() * domains.length);
      console.log(pronoun[i] + adjective[j] + noun[y] + domains[randomIndexForDomain]);
    }
  }
}