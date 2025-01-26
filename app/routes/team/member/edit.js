import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamMemberEditRoute extends Route {
  @service store;

  async model() {
    const team = this.modelFor('team');
    const { member_id } = this.paramsFor('team.member');
    return {
      team: team,
      member: await this.store.findRecord('member', member_id),
    };
  }
}
