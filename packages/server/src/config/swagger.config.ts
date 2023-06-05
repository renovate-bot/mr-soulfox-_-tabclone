import {DocumentBuilder} from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
	.setTitle('TabClone API')
	.setDescription('TabClone API Documentation')
	.setVersion(process.env.VERSION)
	.addTag('TabClone')
	.addBearerAuth()
	.setContact(
		'Marcos Paulo',
		'https://github.com/mr-soulfox',
		'mr.soulfox.dev@gmail.com'
	)
	.build();
