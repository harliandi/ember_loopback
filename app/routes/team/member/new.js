import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamMemberNewRoute extends Route {
  @service store;

  model() {
    const team = this.modelFor('team');
    return {
      team: team,
      member: this.store.createRecord('member', {
        teamId: team.id,
      }),
    };
  }
}
