import Ember from 'ember';

import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import RippleMixin from 'ember-paper/mixins/ripple-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';
import ProxiableMixin from 'ember-paper/mixins/proxiable-mixin';

const {computed} = Ember;

export default Ember.LinkComponent.extend(FocusableMixin, RippleMixin, ColorMixin, ProxiableMixin, {

  // Add needed paper-button properties
  classNames: ['md-default-theme', 'md-button', 'paper-link'],
  raised: false,
  iconButton: false,
  fab: computed.reads('mini'),  // circular button
  mini: false,

  // For raised buttons: toggle disabled when button is active
  disabled: computed.and('raised', 'active'),

  // Ripple Overrides
  rippleContainerSelector: null,
  fitRipple: computed.readOnly('iconButton'),
  center: computed.readOnly('iconButton'),
  dimBackground: computed.not('iconButton'),

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
  active: Ember.LinkComponent.active,

  // FocusableMixin overrides to prevent changing 'active' property
  down() {
    this.set('pressed', true);
  },
  up() {
    this.set('pressed', false);
  }
});
