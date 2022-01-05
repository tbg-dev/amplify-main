/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        handed
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
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        handed
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
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
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
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncResources = /* GraphQL */ `
  query SyncResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getSwing = /* GraphQL */ `
  query GetSwing($id: ID!) {
    getSwing(id: $id) {
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
export const listSwings = /* GraphQL */ `
  query ListSwings(
    $filter: ModelSwingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSwings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        resources {
          nextToken
          startedAt
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSwings = /* GraphQL */ `
  query SyncSwings(
    $filter: ModelSwingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSwings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        resources {
          nextToken
          startedAt
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
