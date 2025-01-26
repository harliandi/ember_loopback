import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TeamController extends Controller {
  @service router;
  @service store;

  @action
  async deleteMember(member) {
    if (confirm(`Are you sure you want to delete ${member.name}?`)) {
      await member.destroyRecord();
      this.model.members.removeObject(member);
    }
  }
}
