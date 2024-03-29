import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ChangePasswordInput, UserUpdateInput } from './dto';
import { IUser } from './interface';
import { UserService } from './user.service';

import { Auth } from '@/decorators/auth.decorator';
import { Context, GetContext } from '@/decorators/user.decorator';
import { ResponseMessageBase } from '@/base/interface';
import { GraphQLResolveInfo } from 'graphql';

@Auth()
@Resolver()
export class UserResolver {
  constructor(protected service: UserService) {}

  @Mutation(() => IUser)
  async updateMe(
    @Args('input') userUpdateInput: UserUpdateInput,
    @GetContext() ctx: Context,
  ): Promise<IUser> {
    return this.service.updateUser(userUpdateInput, ctx);
  }

  @Query(() => IUser, { name: 'getMe' })
  async getMe(@GetContext() ctx: Context, @Info() info: GraphQLResolveInfo) {
    const { currentUser } = ctx;
    return await this.service.getUser(currentUser.id, info);
  }

  @Mutation(() => ResponseMessageBase, { name: 'changePassword' })
  async changePassword(
    @Args('changePasswordInput') changePasswordInput: ChangePasswordInput,
    @GetContext() ctx: Context,
  ) {
    return this.service.changePassword(changePasswordInput, ctx);
  }
}
