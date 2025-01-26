import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamMemberEditController extends Controller {
  @service router;
  @service store;

  @action
  async saveMember() {
    try {
      await this.model.member.save({
        adapterOptions: { teamId: this.model.team.id },
      });
      this.router.transitionTo('team', this.model.team.id);
    } catch (error) {
      console.error('Error saving member:', error);
    }
  }

  @action
  handleCancel() {
    this.router.transitionTo('team', this.model.team.id);
  }
}
