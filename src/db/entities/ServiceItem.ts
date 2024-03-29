import { CustomBaseEntity } from '@/common/base/baseEntity';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Service } from './Service';
import { GraphQLResolveInfo } from 'graphql';
import { getJoinRelation } from '@/providers/selectionUtils';
import { EventServiceItem } from './EventServiceItem';

@ObjectType({ isAbstract: true })
@Entity('service_item')
export class ServiceItem extends CustomBaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column()
  description: string;

  @Field(() => Float, { nullable: true })
  @Column()
  price: number;

  @Field({ nullable: true })
  @Column()
  totalQuantity: number;

  @Field(() => ID)
  @Column()
  serviceId: string;

  @Field(() => Boolean)
  @Column()
  isPublished: boolean;

  @Field(() => Service)
  @ManyToOne(() => Service, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @Field(() => [String])
  @Column({ type: 'text', array: true, nullable: true, default: [] })
  images: string[];

  @Field(() => [EventServiceItem], { nullable: true })
  @OneToMany(() => EventServiceItem, (et) => et.serviceItem)
  eventServiceItems: EventServiceItem[];

  static getRelations(
    info: GraphQLResolveInfo,
    withPagination?: boolean,
    forceInclude?: string[],
  ): string[] {
    const fields = [['service']];

    return getJoinRelation(info, fields, withPagination, forceInclude);
  }
}
