import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'auth:getToken': function(): string {
    return `Random token: ${Math.random() * 10000}`;
  }
});
