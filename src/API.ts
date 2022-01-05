/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  handed?: SwingHanded | null,
  _version?: number | null,
};

export enum SwingHanded {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}


export type ModelUserConditionInput = {
  handed?: ModelSwingHandedInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelSwingHandedInput = {
  eq?: SwingHanded | null,
  ne?: SwingHanded | null,
};

export type User = {
  __typename: "User",
  id: string,
  handed?: SwingHanded | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  handed?: SwingHanded | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateResourceInput = {
  id?: string | null,
  type: ResourceType,
  name: string,
  version: string,
  parentID: string,
  groupID: string,
  authorId: string,
  authorType: ResourceAuthorType,
  data?: string | null,
  contentType?: string | null,
  storageKey?: string | null,
  fileExt?: string | null,
  _version?: number | null,
};

export enum ResourceType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  JSON = "JSON",
}


export enum ResourceAuthorType {
  APP = "APP",
}


export type ModelResourceConditionInput = {
  type?: ModelResourceTypeInput | null,
  name?: ModelStringInput | null,
  version?: ModelStringInput | null,
  parentID?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  authorType?: ModelResourceAuthorTypeInput | null,
  data?: ModelStringInput | null,
  contentType?: ModelStringInput | null,
  storageKey?: ModelStringInput | null,
  fileExt?: ModelStringInput | null,
  and?: Array< ModelResourceConditionInput | null > | null,
  or?: Array< ModelResourceConditionInput | null > | null,
  not?: ModelResourceConditionInput | null,
};

export type ModelResourceTypeInput = {
  eq?: ResourceType | null,
  ne?: ResourceType | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelResourceAuthorTypeInput = {
  eq?: ResourceAuthorType | null,
  ne?: ResourceAuthorType | null,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  type: ResourceType,
  name: string,
  version: string,
  parentID: string,
  groupID: string,
  authorId: string,
  authorType: ResourceAuthorType,
  data?: string | null,
  contentType?: string | null,
  storageKey?: string | null,
  fileExt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateResourceInput = {
  id: string,
  type?: ResourceType | null,
  name?: string | null,
  version?: string | null,
  parentID?: string | null,
  groupID?: string | null,
  authorId?: string | null,
  authorType?: ResourceAuthorType | null,
  data?: string | null,
  contentType?: string | null,
  storageKey?: string | null,
  fileExt?: string | null,
  _version?: number | null,
};

export type DeleteResourceInput = {
  id: string,
  _version?: number | null,
};

export type CreateSwingInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelSwingConditionInput = {
  and?: Array< ModelSwingConditionInput | null > | null,
  or?: Array< ModelSwingConditionInput | null > | null,
  not?: ModelSwingConditionInput | null,
};

export type Swing = {
  __typename: "Swing",
  id: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  resources?: ModelResourceConnection | null,
  owner?: string | null,
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection",
  items:  Array<Resource | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateSwingInput = {
  id: string,
  _version?: number | null,
};

export type DeleteSwingInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  handed?: ModelSwingHandedInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelResourceTypeInput | null,
  name?: ModelStringInput | null,
  version?: ModelStringInput | null,
  parentID?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  authorType?: ModelResourceAuthorTypeInput | null,
  data?: ModelStringInput | null,
  contentType?: ModelStringInput | null,
  storageKey?: ModelStringInput | null,
  fileExt?: ModelStringInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelSwingFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelSwingFilterInput | null > | null,
  or?: Array< ModelSwingFilterInput | null > | null,
  not?: ModelSwingFilterInput | null,
};

export type ModelSwingConnection = {
  __typename: "ModelSwingConnection",
  items:  Array<Swing | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type CreateResourceMutation = {
  createResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type UpdateResourceMutation = {
  updateResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type DeleteResourceMutation = {
  deleteResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSwingMutationVariables = {
  input: CreateSwingInput,
  condition?: ModelSwingConditionInput | null,
};

export type CreateSwingMutation = {
  createSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateSwingMutationVariables = {
  input: UpdateSwingInput,
  condition?: ModelSwingConditionInput | null,
};

export type UpdateSwingMutation = {
  updateSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteSwingMutationVariables = {
  input: DeleteSwingInput,
  condition?: ModelSwingConditionInput | null,
};

export type DeleteSwingMutation = {
  deleteSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      handed?: SwingHanded | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      handed?: SwingHanded | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      type: ResourceType,
      name: string,
      version: string,
      parentID: string,
      groupID: string,
      authorId: string,
      authorType: ResourceAuthorType,
      data?: string | null,
      contentType?: string | null,
      storageKey?: string | null,
      fileExt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncResourcesQuery = {
  syncResources?:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      type: ResourceType,
      name: string,
      version: string,
      parentID: string,
      groupID: string,
      authorId: string,
      authorType: ResourceAuthorType,
      data?: string | null,
      contentType?: string | null,
      storageKey?: string | null,
      fileExt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSwingQueryVariables = {
  id: string,
};

export type GetSwingQuery = {
  getSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListSwingsQueryVariables = {
  filter?: ModelSwingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSwingsQuery = {
  listSwings?:  {
    __typename: "ModelSwingConnection",
    items:  Array< {
      __typename: "Swing",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSwingsQueryVariables = {
  filter?: ModelSwingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSwingsQuery = {
  syncSwings?:  {
    __typename: "ModelSwingConnection",
    items:  Array< {
      __typename: "Swing",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    handed?: SwingHanded | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateResourceSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateResourceSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteResourceSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource?:  {
    __typename: "Resource",
    id: string,
    type: ResourceType,
    name: string,
    version: string,
    parentID: string,
    groupID: string,
    authorId: string,
    authorType: ResourceAuthorType,
    data?: string | null,
    contentType?: string | null,
    storageKey?: string | null,
    fileExt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSwingSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSwingSubscription = {
  onCreateSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSwingSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSwingSubscription = {
  onUpdateSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSwingSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSwingSubscription = {
  onDeleteSwing?:  {
    __typename: "Swing",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        id: string,
        type: ResourceType,
        name: string,
        version: string,
        parentID: string,
        groupID: string,
        authorId: string,
        authorType: ResourceAuthorType,
        data?: string | null,
        contentType?: string | null,
        storageKey?: string | null,
        fileExt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};
