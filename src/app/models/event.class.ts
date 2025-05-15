export class Event {
    title: string;
    start: Date;
    end: Date;
    
    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.start = obj ? obj.start : '';
        this.end = obj ? obj.end : '';
        borderColor: "transparent";
    }

    toJson() {
        return {
            title: this.title,
            start: this.start,
            end: this.end,
            borderColor: "transparent"
        }
    }
}