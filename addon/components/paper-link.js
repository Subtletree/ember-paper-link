import { reads, and, readOnly, not } from '@ember/object/computed';
import LinkComponent from '@ember/routing/link-component';

import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import RippleMixin from 'ember-paper/mixins/ripple-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';
import ProxiableMixin from 'ember-paper/mixins/proxiable-mixin';

export default LinkComponent.extend(FocusableMixin, RippleMixin, ColorMixin, ProxiableMixin, {

  // Add needed paper-button properties
  classNames: ['md-default-theme', 'md-button', 'paper-link'],
  raised: false,
  iconButton: false,
  fab: reads('mini'),  // circular button
  mini: false,

  // For raised buttons: toggle disabled when button is active
  disabled: and('raised', 'active'),

  // Ripple Overrides
  rippleContainerSelector: null,
  fitRipple: readOnly('iconButton'),
  center: readOnly('iconButton'),
  dimBackground: not('iconButton'),

  classNameBindings: [
    'raised:md-raised',
    'iconButton:md-icon-button',
    'fab:md-fab',
    'mini:md-mini'
  ],

  // if passedParams then convert passedParams to link-to's expected positionalParams
  init() {
    this._super(...arguments);
    if (this.get('passedParams')) {
      this.set('params', this.get('passedParams'));
    }
  },

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
