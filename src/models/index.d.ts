import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SwingHanded {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export enum ResourceType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  JSON = "JSON"
}

export enum ResourceAuthorType {
  APP = "APP"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResourceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SwingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly handed?: SwingHanded | keyof typeof SwingHanded;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Resource {
  readonly id: string;
  readonly type: ResourceType | keyof typeof ResourceType;
  readonly name: string;
  readonly version: string;
  readonly parentID: string;
  readonly groupID: string;
  readonly authorId: string;
  readonly authorType: ResourceAuthorType | keyof typeof ResourceAuthorType;
  readonly data?: string;
  readonly contentType?: string;
  readonly storageKey?: string;
  readonly fileExt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Resource, ResourceMetaData>);
  static copyOf(source: Resource, mutator: (draft: MutableModel<Resource, ResourceMetaData>) => MutableModel<Resource, ResourceMetaData> | void): Resource;
}

export declare class Swing {
  readonly id: string;
  readonly resources?: (Resource | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Swing, SwingMetaData>);
  static copyOf(source: Swing, mutator: (draft: MutableModel<Swing, SwingMetaData>) => MutableModel<Swing, SwingMetaData> | void): Swing;
}