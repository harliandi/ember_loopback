import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamNewController extends Controller {
  @service router;

  @action
  async saveTeam() {
    try {
      await this.model.save();
      this.router.transitionTo('index');
    } catch (error) {
      console.error('Error saving team:', error);
    }
  }

  @action
  handleCancel() {
    // Only unload if the record hasn't been saved
    if (this.model.isNew) {
      this.model.unloadRecord();
    }
    this.router.transitionTo('index');
  }
}
