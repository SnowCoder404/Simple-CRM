export class Event {
    title: string;
    start: Date;
    end: Date;
    backgroundColor: string;
    
    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.start = obj ? obj.start : '';
        this.end = obj ? obj.end : '';
        this.backgroundColor = obj ? obj.backgroundColor: '';
    }

    toJson() {
        return {
            title: this.title,
            start: this.start,
            end: this.end,
            backgroundColor: this.backgroundColor
        }
    }
}