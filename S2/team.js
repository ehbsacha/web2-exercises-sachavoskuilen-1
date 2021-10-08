export default class Team {
    constructor(){
        this.teamName = 'Fat boiiii';
        this.trainer = 'You';
        this.roster = [];
    }

    describe(){
        return `Team<p class="teamName"> ${this.teamName} </p> with <p class="trainerName"> ${this.trainer} </p> as trainer 
        has the following pokemon: ${[...this.roster] }`;
    }

}