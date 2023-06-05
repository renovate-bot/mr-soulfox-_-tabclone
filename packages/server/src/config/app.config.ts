import {INestApplication, RequestMethod, ValidationPipe} from '@nestjs/common';

export function appConfiguration(app: INestApplication): void {
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
		})
	);

	app.setGlobalPrefix(process.env.VERSION || 'dev', {
		exclude: [
			{
				path: 'health',
				method: RequestMethod.GET,
			},
			{
				path: 'status',
				method: RequestMethod.GET,
			},
			{
				path: 'docs',
				method: RequestMethod.ALL,
			},
		],
	});
}
