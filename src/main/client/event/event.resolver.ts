import { Args, ID, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventService } from './event.service';
import { IEvent, IEvents } from './interface';
import { QueryFilterDto } from '@/common/dtos/queryFilter';
import { Auth } from '@/decorators/auth.decorator';
import { Roles } from '@/decorators/roles.decorator';
import { ROLE } from '@/common/constant';
import { UpsertEventDto } from './dto';
import { GraphQLResolveInfo } from 'graphql';

@Resolver()
export class EventResolver {
  constructor(protected service: EventService) {}

  @Query(() => IEvent, { name: 'getEvent' })
  async getEvent(
    @Args('id', { type: () => ID }) id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    return await this.service.getOne(id, info);
  }

  @Query(() => IEvents, { name: 'getEvents' })
  async getEvents(
    @Args('queryParams')
    queryParams: QueryFilterDto,
    @Info() info: GraphQLResolveInfo,
  ) {
    return await this.service.getAll(queryParams, info);
  }

  @Auth()
  @Roles(ROLE.Admin)
  @Mutation(() => IEvent, { name: 'upsertEvent' })
  async upsertEvent(@Args('input') input: UpsertEventDto) {
    return await this.service.upsertEvent(input);
  }
}
