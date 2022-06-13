import { OutsideRegisterResult, registerUserAdapter } from '@/adapters/user/register-user-adapter';
import e, { Request, Response } from 'express';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';

const app = e();

const port = process.env.PORT;

app.use(e.json());


const outsideRegister: OutsideRegisterResult = async (data) => (
	{
		success: true,
		data,
	}
);

app.post('/api/users', async (req: Request, res: Response) => {
	return pipe(
		req.body,
		registerUserAdapter(outsideRegister),
		TE.map(result => res
			.status(201)
			.json(result),
		),
		TE.mapLeft((err: any) => res
			.status(err.code)
			.json({ message: err.message }),
		),
	)();
});


app.listen(port, () => console.log(`server is listening at port ${port}`));