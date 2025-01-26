import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('team.new', { path: '/team/new' });
  this.route('team.edit', { path: '/team/:team_id/edit' });
  this.route('team', { path: '/team/:team_id' }, function () {
    this.route('index', { path: '/' });
    // Team member routes
    this.route('member.new', { path: '/members/new' });
    this.route('member', { path: '/members/:member_id' }, function () {
      this.route('edit');
    });
  });
});
