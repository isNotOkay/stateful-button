import { configure } from '@storybook/angular';

function loadStories() {
  require('../stories/stateful-button.js');
  require('../stories/edit-form.js');
}

configure(loadStories, module);
