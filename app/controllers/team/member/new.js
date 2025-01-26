import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamMemberNewController extends Controller {
  @service router;
  @service store;

  @action
  async saveMember() {
    try {
      const teamId = this.model.team.id; // Get team ID from the model
      await this.model.member.save({
        adapterOptions: { teamId },
      });
      this.router.transitionTo('team', this.model.team.id);
    } catch (error) {
      console.error('Error saving member:', error);
    }
  }

  @action
  handleCancel() {
    this.model.member.unloadRecord();
    this.router.transitionTo('team', this.model.team.id);
  }
}
