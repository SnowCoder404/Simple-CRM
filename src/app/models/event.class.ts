export class Event {
    title: string;
    start: Date;
    from: Date;
    to: Date
    backgroundColor: string;
    
    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.start = obj ? obj.start : '';
        this.from = obj ? obj.from : '';
        this.to = obj ? obj.to : '';
        this.backgroundColor = obj ? obj.backgroundColor : '';
        borderColor: "transparent";
    }

    toJson() {
        return {
            title: this.title,
            start: this.start,
            from: this.from,
            to: this.to,
            backgroundColor: this.backgroundColor,
            borderColor: "transparent"
        }
    }
}