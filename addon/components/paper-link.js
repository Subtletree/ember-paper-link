import { reads, and } from '@ember/object/computed';
import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/paper-link'

import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';
import ProxiableMixin from 'ember-paper/mixins/proxiable-mixin';

export default LinkComponent.extend(FocusableMixin, ColorMixin, ProxiableMixin, {
  layout,

  // Add needed paper-button properties
  classNames: ['md-default-theme', 'md-button', 'paper-link'],
  raised: false,
  iconButton: false,
  fab: reads('mini'),  // circular button
  mini: false,

  // For raised buttons: toggle disabled when button is active
  disabled: and('raised', 'active'),

  classNameBindings: [
    'raised:md-raised',
    'iconButton:md-icon-button',
    'fab:md-fab',
    'mini:md-mini'
  ],

  // FocusableMixin overrides active so set back to link-to's active
  active: LinkComponent.active,

  // FocusableMixin overrides to prevent changing 'active' property
  down() {
    this.set('pressed', true);
  },
  up() {
    this.set('pressed', false);
  }
});
