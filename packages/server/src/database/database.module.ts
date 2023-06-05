import {Module} from '@nestjs/common';
import {PrismaService} from './lib/prisma.service';
import {AnonymousPrismaService} from './services/anonymous.service';
import {UserPrismaService} from './services/user.service';

@Module({
	providers: [PrismaService, AnonymousPrismaService, UserPrismaService],
	exports: [PrismaService, AnonymousPrismaService, UserPrismaService],
})
export class DatabaseModule {}
