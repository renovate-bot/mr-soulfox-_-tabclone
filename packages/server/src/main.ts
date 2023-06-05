import {NestFactory} from '@nestjs/core';
import {SwaggerModule} from '@nestjs/swagger';
import {IndexModule} from './index.module';
import {PrismaService} from './database/lib/prisma.service';
import {swaggerConfig} from './config/swagger.config';
import {hotModuleConfig} from './config/hrm.config';
import {appConfiguration} from './config/app.config';

const port = process.env.PORT || 3000;

async function bootstrap() {
	const app = await NestFactory.create(IndexModule);
	const prismaService = app.get(PrismaService);
	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

	appConfiguration(app);

	await prismaService.enableShutdownHooks(app);
	SwaggerModule.setup('docs', app, swaggerDocument);

	await app.listen(port);
	hotModuleConfig(app);
}

bootstrap();
