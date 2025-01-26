import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamEditController extends Controller {
  @service router;

  @action
  async saveTeam() {
    try {
      await this.model.save();
      this.router.transitionTo('index');
    } catch (error) {
      console.error('Error updating team:', error);
    }
  }

  @action
  handleCancel() {
    if (!this.model.isNew) {
      this.model.rollbackAttributes();
    }
    this.router.transitionTo('index');
  }
}
