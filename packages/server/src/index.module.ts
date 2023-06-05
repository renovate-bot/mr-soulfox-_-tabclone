import {Global, Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {UserModule} from './modules/user/user.module';

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: './.env',
		}),
		UserModule,
	],
})
export class IndexModule {}
