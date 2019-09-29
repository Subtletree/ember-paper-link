import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | paper link', function(hooks) {
  setupApplicationTest(hooks);

  test('paper-link changes route', async function(assert) {
    await visit('/first-route');
    await click('[data-test-selector="second-route"]');

    assert.equal(currentURL(), '/second-route');
  });

  test('paper-link-item changes route', async function(assert) {
    await visit('/first-route');
    await click('[data-test-selector="second-route-item"] a');

    assert.equal(currentURL(), '/second-route');
  });
});
