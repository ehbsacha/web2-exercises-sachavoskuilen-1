export default class Team {
    constructor(){
        this.teamName = 'Random';
        this.trainer = 'You';
        this.roster = [];
    }

    describe(){
        return `<p>Team:<p class="teamName"> ${this.teamName}</p></p></br>
        <p>Trainer:<p class="trainerName"> ${this.trainer} </p></p></br>
        pokemon:  ${[...this.roster]} `;
    }

}