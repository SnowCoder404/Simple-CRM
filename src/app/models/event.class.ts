export class Event {
    title: string;
    start: Date;
    backgroundColor: string;
    
    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.start = obj ? obj.start : '';
        this.backgroundColor = obj ? obj.backgroundColor : '';
        borderColor: "transparent";
    }

    toJson() {
        return {
            title: this.title,
            start: this.start,
            bgColor: this.backgroundColor,
            borderColor: "transparent"
        }
    }
}