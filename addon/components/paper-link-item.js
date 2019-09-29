import PaperItem from 'ember-paper/components/paper-item';
import layout from '../templates/components/paper-link-item';

export default PaperItem.extend({
  layout,
  hasPrimaryAction: true,
  replace: false,
  linkComponentName: 'paper-link'
}).reopenClass({
  positionalParams: 'params'
});
