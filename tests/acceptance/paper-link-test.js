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

  test('paper-link shows active class', async function(assert) {
    await visit('/first-route');
    assert.dom('[data-test-selector="first-route"]').hasClass('active')
    
    await click('[data-test-selector="second-route"]');

    assert.dom('[data-test-selector="first-route"]').doesNotHaveClass('active')
    assert.dom('[data-test-selector="second-route"]').hasClass('active')
  });

  test('paper-link-item shows active class', async function(assert) {
    await visit('/first-route');
    assert.dom('[data-test-selector="first-route-item"] a').hasClass('active')
    
    await click('[data-test-selector="second-route"]');

    assert.dom('[data-test-selector="first-route-item"] a').doesNotHaveClass('active')
    assert.dom('[data-test-selector="second-route-item"] a').hasClass('active')
  });
});
