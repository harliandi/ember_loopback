import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TeamFormComponent extends Component {
  @action
  handleSubmit(event) {
    event.preventDefault();
    if (typeof this.args.onSubmit === 'function') {
      this.args.onSubmit();
    }
  }

  @action
  handleCancel() {
    if (typeof this.args.onCancel === 'function') {
      this.args.onCancel();
    }
  }
}
