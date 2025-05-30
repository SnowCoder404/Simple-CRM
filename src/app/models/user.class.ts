export class User {
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    bithDate: number;
    zipCode: number; 
    city: string;
    job: string;
    
    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.street = obj ? obj.street : '';
        this.bithDate = obj ? obj.bithDate : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.job = obj ? obj.job : '';
    }

    toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            street: this.street,
            bithDate: this.bithDate,
            zipCode: this.zipCode,
            city: this.city,
            job: this.job
          }
    }
}