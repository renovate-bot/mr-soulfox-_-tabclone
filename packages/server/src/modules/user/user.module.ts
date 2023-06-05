import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/database/database.module';
import {UserController} from './controllers/user.controller';
import {AnonController} from './controllers/anon.controller';
import {
	CreateTokenService,
	DeleteTokenService,
	GetTokenService,
	VerifyTokenService,
} from './services';

@Module({
	imports: [DatabaseModule],
	controllers: [UserController, AnonController],
	providers: [
		VerifyTokenService,
		CreateTokenService,
		GetTokenService,
		DeleteTokenService,
	],
})
export class UserModule {}
