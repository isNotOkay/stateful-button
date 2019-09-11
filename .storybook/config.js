import { configure } from '@storybook/angular';

function loadStories() {
  require('../stories/stateful-button.js');
  require('../stories/table.js');
  require('../stories/edit-form.js');
}

configure(loadStories, module);
