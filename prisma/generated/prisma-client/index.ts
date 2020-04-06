// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  migration: (where?: MigrationWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  migration: (where: MigrationWhereUniqueInput) => MigrationNullablePromise;
  migrations: (args?: {
    where?: MigrationWhereInput;
    orderBy?: MigrationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Migration>;
  migrationsConnection: (args?: {
    where?: MigrationWhereInput;
    orderBy?: MigrationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MigrationConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMigration: (data: MigrationCreateInput) => MigrationPromise;
  updateMigration: (args: {
    data: MigrationUpdateInput;
    where: MigrationWhereUniqueInput;
  }) => MigrationPromise;
  updateManyMigrations: (args: {
    data: MigrationUpdateManyMutationInput;
    where?: MigrationWhereInput;
  }) => BatchPayloadPromise;
  upsertMigration: (args: {
    where: MigrationWhereUniqueInput;
    create: MigrationCreateInput;
    update: MigrationUpdateInput;
  }) => MigrationPromise;
  deleteMigration: (where: MigrationWhereUniqueInput) => MigrationPromise;
  deleteManyMigrations: (where?: MigrationWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  migration: (
    where?: MigrationSubscriptionWhereInput
  ) => MigrationSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MigrationOrderByInput =
  | "revision_ASC"
  | "revision_DESC"
  | "applied_ASC"
  | "applied_DESC"
  | "databaseMigration_ASC"
  | "databaseMigration_DESC"
  | "datamodel_ASC"
  | "datamodel_DESC"
  | "datamodelSteps_ASC"
  | "datamodelSteps_DESC"
  | "errors_ASC"
  | "errors_DESC"
  | "finishedAt_ASC"
  | "finishedAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "rolledBack_ASC"
  | "rolledBack_DESC"
  | "startedAt_ASC"
  | "startedAt_DESC"
  | "status_ASC"
  | "status_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  id?: Maybe<Int>;
  name: String;
}

export type MigrationWhereUniqueInput = AtLeastOne<{
  revision: Maybe<Int>;
}>;

export interface MigrationUpdateInput {
  applied?: Maybe<Int>;
  databaseMigration?: Maybe<String>;
  datamodel?: Maybe<String>;
  datamodelSteps?: Maybe<String>;
  errors?: Maybe<String>;
  finishedAt?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  rolledBack?: Maybe<Int>;
  startedAt?: Maybe<DateTimeInput>;
  status?: Maybe<String>;
}

export interface MigrationWhereInput {
  revision?: Maybe<Int>;
  revision_not?: Maybe<Int>;
  revision_in?: Maybe<Int[] | Int>;
  revision_not_in?: Maybe<Int[] | Int>;
  revision_lt?: Maybe<Int>;
  revision_lte?: Maybe<Int>;
  revision_gt?: Maybe<Int>;
  revision_gte?: Maybe<Int>;
  applied?: Maybe<Int>;
  applied_not?: Maybe<Int>;
  applied_in?: Maybe<Int[] | Int>;
  applied_not_in?: Maybe<Int[] | Int>;
  applied_lt?: Maybe<Int>;
  applied_lte?: Maybe<Int>;
  applied_gt?: Maybe<Int>;
  applied_gte?: Maybe<Int>;
  databaseMigration?: Maybe<String>;
  databaseMigration_not?: Maybe<String>;
  databaseMigration_in?: Maybe<String[] | String>;
  databaseMigration_not_in?: Maybe<String[] | String>;
  databaseMigration_lt?: Maybe<String>;
  databaseMigration_lte?: Maybe<String>;
  databaseMigration_gt?: Maybe<String>;
  databaseMigration_gte?: Maybe<String>;
  databaseMigration_contains?: Maybe<String>;
  databaseMigration_not_contains?: Maybe<String>;
  databaseMigration_starts_with?: Maybe<String>;
  databaseMigration_not_starts_with?: Maybe<String>;
  databaseMigration_ends_with?: Maybe<String>;
  databaseMigration_not_ends_with?: Maybe<String>;
  datamodel?: Maybe<String>;
  datamodel_not?: Maybe<String>;
  datamodel_in?: Maybe<String[] | String>;
  datamodel_not_in?: Maybe<String[] | String>;
  datamodel_lt?: Maybe<String>;
  datamodel_lte?: Maybe<String>;
  datamodel_gt?: Maybe<String>;
  datamodel_gte?: Maybe<String>;
  datamodel_contains?: Maybe<String>;
  datamodel_not_contains?: Maybe<String>;
  datamodel_starts_with?: Maybe<String>;
  datamodel_not_starts_with?: Maybe<String>;
  datamodel_ends_with?: Maybe<String>;
  datamodel_not_ends_with?: Maybe<String>;
  datamodelSteps?: Maybe<String>;
  datamodelSteps_not?: Maybe<String>;
  datamodelSteps_in?: Maybe<String[] | String>;
  datamodelSteps_not_in?: Maybe<String[] | String>;
  datamodelSteps_lt?: Maybe<String>;
  datamodelSteps_lte?: Maybe<String>;
  datamodelSteps_gt?: Maybe<String>;
  datamodelSteps_gte?: Maybe<String>;
  datamodelSteps_contains?: Maybe<String>;
  datamodelSteps_not_contains?: Maybe<String>;
  datamodelSteps_starts_with?: Maybe<String>;
  datamodelSteps_not_starts_with?: Maybe<String>;
  datamodelSteps_ends_with?: Maybe<String>;
  datamodelSteps_not_ends_with?: Maybe<String>;
  errors?: Maybe<String>;
  errors_not?: Maybe<String>;
  errors_in?: Maybe<String[] | String>;
  errors_not_in?: Maybe<String[] | String>;
  errors_lt?: Maybe<String>;
  errors_lte?: Maybe<String>;
  errors_gt?: Maybe<String>;
  errors_gte?: Maybe<String>;
  errors_contains?: Maybe<String>;
  errors_not_contains?: Maybe<String>;
  errors_starts_with?: Maybe<String>;
  errors_not_starts_with?: Maybe<String>;
  errors_ends_with?: Maybe<String>;
  errors_not_ends_with?: Maybe<String>;
  finishedAt?: Maybe<DateTimeInput>;
  finishedAt_not?: Maybe<DateTimeInput>;
  finishedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  finishedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  finishedAt_lt?: Maybe<DateTimeInput>;
  finishedAt_lte?: Maybe<DateTimeInput>;
  finishedAt_gt?: Maybe<DateTimeInput>;
  finishedAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  rolledBack?: Maybe<Int>;
  rolledBack_not?: Maybe<Int>;
  rolledBack_in?: Maybe<Int[] | Int>;
  rolledBack_not_in?: Maybe<Int[] | Int>;
  rolledBack_lt?: Maybe<Int>;
  rolledBack_lte?: Maybe<Int>;
  rolledBack_gt?: Maybe<Int>;
  rolledBack_gte?: Maybe<Int>;
  startedAt?: Maybe<DateTimeInput>;
  startedAt_not?: Maybe<DateTimeInput>;
  startedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  startedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  startedAt_lt?: Maybe<DateTimeInput>;
  startedAt_lte?: Maybe<DateTimeInput>;
  startedAt_gt?: Maybe<DateTimeInput>;
  startedAt_gte?: Maybe<DateTimeInput>;
  status?: Maybe<String>;
  status_not?: Maybe<String>;
  status_in?: Maybe<String[] | String>;
  status_not_in?: Maybe<String[] | String>;
  status_lt?: Maybe<String>;
  status_lte?: Maybe<String>;
  status_gt?: Maybe<String>;
  status_gte?: Maybe<String>;
  status_contains?: Maybe<String>;
  status_not_contains?: Maybe<String>;
  status_starts_with?: Maybe<String>;
  status_not_starts_with?: Maybe<String>;
  status_ends_with?: Maybe<String>;
  status_not_ends_with?: Maybe<String>;
  AND?: Maybe<MigrationWhereInput[] | MigrationWhereInput>;
  OR?: Maybe<MigrationWhereInput[] | MigrationWhereInput>;
  NOT?: Maybe<MigrationWhereInput[] | MigrationWhereInput>;
}

export interface MigrationSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MigrationWhereInput>;
  AND?: Maybe<
    MigrationSubscriptionWhereInput[] | MigrationSubscriptionWhereInput
  >;
  OR?: Maybe<
    MigrationSubscriptionWhereInput[] | MigrationSubscriptionWhereInput
  >;
  NOT?: Maybe<
    MigrationSubscriptionWhereInput[] | MigrationSubscriptionWhereInput
  >;
}

export interface UserWhereInput {
  id?: Maybe<Int>;
  id_not?: Maybe<Int>;
  id_in?: Maybe<Int[] | Int>;
  id_not_in?: Maybe<Int[] | Int>;
  id_lt?: Maybe<Int>;
  id_lte?: Maybe<Int>;
  id_gt?: Maybe<Int>;
  id_gte?: Maybe<Int>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface MigrationCreateInput {
  applied: Int;
  databaseMigration: String;
  datamodel: String;
  datamodelSteps: String;
  errors: String;
  finishedAt?: Maybe<DateTimeInput>;
  name: String;
  rolledBack: Int;
  startedAt: DateTimeInput;
  status: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<Int>;
}>;

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface MigrationUpdateManyMutationInput {
  applied?: Maybe<Int>;
  databaseMigration?: Maybe<String>;
  datamodel?: Maybe<String>;
  datamodelSteps?: Maybe<String>;
  errors?: Maybe<String>;
  finishedAt?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  rolledBack?: Maybe<Int>;
  startedAt?: Maybe<DateTimeInput>;
  status?: Maybe<String>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserPreviousValues {
  id: Int;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<Int>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface MigrationSubscriptionPayload {
  mutation: MutationType;
  node: Migration;
  updatedFields: String[];
  previousValues: MigrationPreviousValues;
}

export interface MigrationSubscriptionPayloadPromise
  extends Promise<MigrationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MigrationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MigrationPreviousValuesPromise>() => T;
}

export interface MigrationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MigrationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MigrationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MigrationPreviousValuesSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MigrationPreviousValues {
  revision: Int;
  applied: Int;
  databaseMigration: String;
  datamodel: String;
  datamodelSteps: String;
  errors: String;
  finishedAt?: DateTimeOutput;
  name: String;
  rolledBack: Int;
  startedAt: DateTimeOutput;
  status: String;
}

export interface MigrationPreviousValuesPromise
  extends Promise<MigrationPreviousValues>,
    Fragmentable {
  revision: () => Promise<Int>;
  applied: () => Promise<Int>;
  databaseMigration: () => Promise<String>;
  datamodel: () => Promise<String>;
  datamodelSteps: () => Promise<String>;
  errors: () => Promise<String>;
  finishedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  rolledBack: () => Promise<Int>;
  startedAt: () => Promise<DateTimeOutput>;
  status: () => Promise<String>;
}

export interface MigrationPreviousValuesSubscription
  extends Promise<AsyncIterator<MigrationPreviousValues>>,
    Fragmentable {
  revision: () => Promise<AsyncIterator<Int>>;
  applied: () => Promise<AsyncIterator<Int>>;
  databaseMigration: () => Promise<AsyncIterator<String>>;
  datamodel: () => Promise<AsyncIterator<String>>;
  datamodelSteps: () => Promise<AsyncIterator<String>>;
  errors: () => Promise<AsyncIterator<String>>;
  finishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  rolledBack: () => Promise<AsyncIterator<Int>>;
  startedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  status: () => Promise<AsyncIterator<String>>;
}

export interface MigrationConnection {
  pageInfo: PageInfo;
  edges: MigrationEdge[];
}

export interface MigrationConnectionPromise
  extends Promise<MigrationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MigrationEdge>>() => T;
  aggregate: <T = AggregateMigrationPromise>() => T;
}

export interface MigrationConnectionSubscription
  extends Promise<AsyncIterator<MigrationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MigrationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMigrationSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface Migration {
  revision: Int;
  applied: Int;
  databaseMigration: String;
  datamodel: String;
  datamodelSteps: String;
  errors: String;
  finishedAt?: DateTimeOutput;
  name: String;
  rolledBack: Int;
  startedAt: DateTimeOutput;
  status: String;
}

export interface MigrationPromise extends Promise<Migration>, Fragmentable {
  revision: () => Promise<Int>;
  applied: () => Promise<Int>;
  databaseMigration: () => Promise<String>;
  datamodel: () => Promise<String>;
  datamodelSteps: () => Promise<String>;
  errors: () => Promise<String>;
  finishedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  rolledBack: () => Promise<Int>;
  startedAt: () => Promise<DateTimeOutput>;
  status: () => Promise<String>;
}

export interface MigrationSubscription
  extends Promise<AsyncIterator<Migration>>,
    Fragmentable {
  revision: () => Promise<AsyncIterator<Int>>;
  applied: () => Promise<AsyncIterator<Int>>;
  databaseMigration: () => Promise<AsyncIterator<String>>;
  datamodel: () => Promise<AsyncIterator<String>>;
  datamodelSteps: () => Promise<AsyncIterator<String>>;
  errors: () => Promise<AsyncIterator<String>>;
  finishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  rolledBack: () => Promise<AsyncIterator<Int>>;
  startedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  status: () => Promise<AsyncIterator<String>>;
}

export interface MigrationNullablePromise
  extends Promise<Migration | null>,
    Fragmentable {
  revision: () => Promise<Int>;
  applied: () => Promise<Int>;
  databaseMigration: () => Promise<String>;
  datamodel: () => Promise<String>;
  datamodelSteps: () => Promise<String>;
  errors: () => Promise<String>;
  finishedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  rolledBack: () => Promise<Int>;
  startedAt: () => Promise<DateTimeOutput>;
  status: () => Promise<String>;
}

export interface User {
  id: Int;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<Int>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<Int>;
  name: () => Promise<String>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MigrationEdge {
  node: Migration;
  cursor: String;
}

export interface MigrationEdgePromise
  extends Promise<MigrationEdge>,
    Fragmentable {
  node: <T = MigrationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MigrationEdgeSubscription
  extends Promise<AsyncIterator<MigrationEdge>>,
    Fragmentable {
  node: <T = MigrationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMigration {
  count: Int;
}

export interface AggregateMigrationPromise
  extends Promise<AggregateMigration>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMigrationSubscription
  extends Promise<AsyncIterator<AggregateMigration>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Migration",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/prisma/dev`
});
export const prisma = new Prisma();
