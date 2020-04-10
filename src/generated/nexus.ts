/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as PrismaClient from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: boolean | null; // Boolean
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    email: string; // String!
    isAdmin?: boolean | null; // Boolean
    name?: string | null; // String
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
    isAdmin?: boolean | null; // Boolean
    name?: string | null; // String
  }
  UserUpdateManyMutationInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
    isAdmin?: boolean | null; // Boolean
    name?: string | null; // String
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    isAdmin?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
    name?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  BatchPayload: PrismaClient.BatchPayload;
  Mutation: {};
  Query: {};
  User: PrismaClient.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BooleanFilter: NexusGenInputs['BooleanFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  StringFilter: NexusGenInputs['StringFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    updateManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOneUser: NexusGenRootTypes['User'] | null; // User
    upsertOneUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    isAdmin: boolean; // Boolean!
    name: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyUser: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateManyUser: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertOneUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Mutation" | "Query" | "User";

export type NexusGenInputNames = "BooleanFilter" | "IntFilter" | "NullableStringFilter" | "StringFilter" | "UserCreateInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: { prisma: PrismaClient.PrismaClient };
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}