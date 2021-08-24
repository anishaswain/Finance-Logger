//class
export default class Payments {
    //private or readonly
    // private client:string;
    // private details:string;
    // private amount:number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = client;
        // this.details = details;
        // this.amount = amount
    }
    format() {
        return `${this.client} is owed ${this.amount} for ${this.details}`;
    }
}
