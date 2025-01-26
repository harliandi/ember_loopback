import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamRoute extends Route {
  @service store;

  async model() {
    const { team_id } = this.paramsFor('team');
    const team = await this.store.findRecord('team', team_id);
    const members = await this.store.query('member', {
      teamId: team_id,
    });
    return { team, members };
  }
}
