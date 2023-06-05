import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {AnonymousInfoDto} from '../dtos/create-anonymous.dto';
import {CreateTokenService} from '../services';
import {Anonymous} from '../services/anon/create/entities/create.entities';

@Controller('anon')
export class AnonController {
	constructor(private readonly createService: CreateTokenService) {}

	@Post('user/create')
	async createAnonymousToken(
		@Body() anonInfoDto: AnonymousInfoDto
	): Promise<Anonymous | string> {
		return this.createService.create(anonInfoDto);
	}

	@Get('/user/verify/:anonId')
	verifyAnonymousToken(@Param('anonId') anonId: string): string {
		return anonId;
	}

	@Get('/user/:anonId')
	getInformationById(@Param('anonId') anonId: string): string {
		return anonId;
	}

	@Delete('/user/delete/:anonId')
	deleteAnonymousUser(@Param('anonId') anonId: string): string {
		return anonId;
	}
}
