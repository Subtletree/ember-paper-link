import Ember from 'ember';
import PaperItem from 'ember-paper/components/paper-item';
import layout from '../templates/components/paper-link-item';

const PaperLinkItem = PaperItem.extend({
  layout,
  hasPrimaryAction: true,
  replace: false
});

PaperLinkItem.reopenClass({
  positionalParams: 'params'
});

export default PaperLinkItem;
