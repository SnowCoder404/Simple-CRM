export class User {
    firstName: string;
    lastName: string;
    street: string;
    bithDate: number;
    zipCode: number; 
    city: string;
    
    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.street = obj ? obj.street : '';
        this.bithDate = obj ? obj.bithDate : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }
}