export class Ticket {
    rID:number;
    amount:number;
    description:string;
    receipt:string; //blob
    submitted:string;//date
    resolved:string;//date
    author:number;
    resolver:number;
    rType:number;
    status:number;

    constructor() {
	}
    /*
	constructor($rID: number, $amount: number, $description: string, $receipt: string, $submitted: string, $resolved: string, $author: number, $resolver: number, $type: number, $status: number) {
		this.rID = $rID;
		this.amount = $amount;
		this.description = $description;
		this.receipt = $receipt;
		this.submitted = $submitted;
		this.resolved = $resolved;
		this.author = $author;
		this.resolver = $resolver;
		this.type = $type;
		this.status = $status;
	}
    */

	public get $rID(): number {
		return this.rID;
	}

	public set $rID(value: number) {
		this.rID = value;
	}

	public get $amount(): number {
		return this.amount;
	}

	public set $amount(value: number) {
		this.amount = value;
	}

	public get $description(): string {
		return this.description;
	}

	public set $description(value: string) {
		this.description = value;
	}

	public get $receipt(): string {
		return this.receipt;
	}

	public set $receipt(value: string) {
		this.receipt = value;
	}

	public get $submitted(): string {
		return this.submitted;
	}

	public set $submitted(value: string) {
		this.submitted = value;
	}

	public get $resolved(): string {
		return this.resolved;
	}

	public set $resolved(value: string) {
		this.resolved = value;
	}

	public get $author(): number {
		return this.author;
	}

	public set $author(value: number) {
		this.author = value;
	}

	public get $resolver(): number {
		return this.resolver;
	}

	public set $resolver(value: number) {
		this.resolver = value;
	}

	public get $rType(): number {
		return this.rType;
	}

	public set $rType(value: number) {
		this.rType = value;
	}

	public get $status(): number {
		return this.status;
	}

	public set $status(value: number) {
		this.status = value;
	}

}