export class HTTPException extends Error {
    public status: number;
    public message: string;
    public stack: string;
    constructor(status: number, message: string, stack: string) {
        super(message);
        this.status = status;
        this.message = message;
        this.stack = stack
    }
    explain() {
        console.log(
            this.status,
            this.message,
            this.stack
        );
    }
}
