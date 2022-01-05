// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SwingHanded = {
  "LEFT": "LEFT",
  "RIGHT": "RIGHT"
};

const ResourceType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO",
  "JSON": "JSON"
};

const ResourceAuthorType = {
  "APP": "APP"
};

const { User, Resource, Swing } = initSchema(schema);

export {
  User,
  Resource,
  Swing,
  SwingHanded,
  ResourceType,
  ResourceAuthorType
};