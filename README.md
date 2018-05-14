# ember-paper-link

This is an [ember-paper](https://github.com/miguelcobain/ember-paper) addon that extends ember's built in `link-to` helper and adds `paper-button` styling and functionality.

The `paper-link` component makes it easy to have buttons that display an 'active' state based on the current route. Exactly the same as `link-to`.

There is also a `paper-link-item` component that creates a list item with the same `link-to` functionality. Intended for use in nav lists.

## Usage

Example usage:

```hbs
{{paper-link 'My route' 'my-route'}}
```

```hbs
{{#paper-list}}
  {{#paper-link-item 'my-route'}}
    <p>Go to My route</p>
  {{/paper-link-item}}
{{/paper-list}}
```

## Demo

https://subtletree.github.io/ember-paper-link/

Installation
------------------------------------------------------------------------------

```bash
ember install ember-paper-link
```

Don't forget to import your styles in your `app.scss` **after** importing ember paper styles:

```scss
@import "ember-paper";
@import "ember-paper-link";
```

## API

### `{{paper-link}}`

Has the same api as [link-to](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_link-to) with the [paper-button](http://miguelcobain.github.io/ember-paper/release-1/#/components/button) attributes added.

Make sure to add any `link-to` parameters before `paper-button` ones e.g:

```hbs
{{paper-link 'My route' 'my-route' model raised=true}}
```

### `{{#paper-link-item as |controls|}}`

Has the same api as [paper-item](http://miguelcobain.github.io/ember-paper/release-1/#/components/list) with the [link-to](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_link-to) attributes added.

Make sure to add any `link-to` parameters before `paper-item` ones e.g:

```hbs
{{#paper-link-item 'my-route' model class="md-2-line" as |controls|}}
  <img src={{item.img}} alt={{item.name}} class="md-avatar">
  <div class="md-list-item-text">
    <h3>{{item.name}}</h3>
    <p>{{item.email}}</p>
  </div>
{{/paper-link-item}}
```
## Running

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
