/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($owner: String) {
    onCreateResource(owner: $owner) {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($owner: String) {
    onUpdateResource(owner: $owner) {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($owner: String) {
    onDeleteResource(owner: $owner) {
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
export const onCreateSwing = /* GraphQL */ `
  subscription OnCreateSwing($owner: String) {
    onCreateSwing(owner: $owner) {
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
export const onUpdateSwing = /* GraphQL */ `
  subscription OnUpdateSwing($owner: String) {
    onUpdateSwing(owner: $owner) {
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
export const onDeleteSwing = /* GraphQL */ `
  subscription OnDeleteSwing($owner: String) {
    onDeleteSwing(owner: $owner) {
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
