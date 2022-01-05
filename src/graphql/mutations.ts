/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      handed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      handed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      handed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      id
      type
      name
      version
      parentID
      groupID
      authorId
      authorType
      data
      contentType
      storageKey
      fileExt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
      id
      type
      name
      version
      parentID
      groupID
      authorId
      authorType
      data
      contentType
      storageKey
      fileExt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      id
      type
      name
      version
      parentID
      groupID
      authorId
      authorType
      data
      contentType
      storageKey
      fileExt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSwing = /* GraphQL */ `
  mutation CreateSwing(
    $input: CreateSwingInput!
    $condition: ModelSwingConditionInput
  ) {
    createSwing(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      resources {
        items {
          id
          type
          name
          version
          parentID
          groupID
          authorId
          authorType
          data
          contentType
          storageKey
          fileExt
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const updateSwing = /* GraphQL */ `
  mutation UpdateSwing(
    $input: UpdateSwingInput!
    $condition: ModelSwingConditionInput
  ) {
    updateSwing(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      resources {
        items {
          id
          type
          name
          version
          parentID
          groupID
          authorId
          authorType
          data
          contentType
          storageKey
          fileExt
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const deleteSwing = /* GraphQL */ `
  mutation DeleteSwing(
    $input: DeleteSwingInput!
    $condition: ModelSwingConditionInput
  ) {
    deleteSwing(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      resources {
        items {
          id
          type
          name
          version
          parentID
          groupID
          authorId
          authorType
          data
          contentType
          storageKey
          fileExt
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
