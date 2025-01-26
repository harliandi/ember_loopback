import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  async deleteTeam(team) {
    if (confirm('Are you sure you want to delete this team?')) {
      await team.destroyRecord();
      this.model.removeObject(team);
    }
  }
}
