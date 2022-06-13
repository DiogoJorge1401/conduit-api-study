import * as TE from 'fp-ts/TaskEither';
import e, { Request, Response } from 'express';
import { pipe } from 'fp-ts/function';
import { registerUserInDBAdapter } from '@/adapters/ports/db';
import { registerUserUseCaseAdapter } from '@/adapters/use-cases/user';

const app = e();

const port = process.env.PORT;

app.use(e.json());

app.post('/api/users', async (req: Request, res: Response) => {
	return pipe(
		req.body,
		registerUserUseCaseAdapter(registerUserInDBAdapter),
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