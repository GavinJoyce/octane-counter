import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

export default class CounterComponent extends Component {
  @tracked count = 1;

  increment() {
    this.count++;
    setTimeout(() => {
      this.count++;
    }, 1000);
  }
}
