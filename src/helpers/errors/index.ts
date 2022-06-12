type DefaultErrorInput = {
	name: string
	code: number
	message: string
};

export class DefaultError extends Error {
	code: number;

	constructor ({ name, code, message }: DefaultErrorInput) {
		super(message);
		this.name = name;
		this.code = code;
	}
}

export class ValidationError extends DefaultError {
	constructor (message: string) {
		super({
			code: 422,
			message,
			name: ValidationError.name,
		});
	}
}