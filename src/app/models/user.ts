export class User {
	userID:number;
    username:string;
	password:string;
	firstName:string;
	lastName:string;
	email:string;
    role:string;
    
	constructor($userID: number, $username: string, $password: string, $firstName: string, $lastName: string, $email: string, $role: string) {
		this.userID = $userID;
		this.username = $username;
		this.password = $password;
		this.firstName = $firstName;
		this.lastName = $lastName;
		this.email = $email;
		this.role = $role;
	}
    

	public get $userID(): number {
		return this.userID;
	}

	public set $userID(value: number) {
		this.userID = value;
	}
    

	public get $username(): string {
		return this.username;
	}

	public set $username(value: string) {
		this.username = value;
	}
    

	public get $password(): string {
		return this.password;
	}

	public set $password(value: string) {
		this.password = value;
	}

	public get $firstName(): string {
		return this.firstName;
	}

	public set $firstName(value: string) {
		this.firstName = value;
	}

	public get $lastName(): string {
		return this.lastName;
	}

	public set $lastName(value: string) {
		this.lastName = value;
	}

	public get $email(): string {
		return this.email;
	}

	public set $email(value: string) {
		this.email = value;
	}

	public get $role(): string {
		return this.role;
	}

	public set $role(value: string) {
		this.role = value;
	}
    

}
