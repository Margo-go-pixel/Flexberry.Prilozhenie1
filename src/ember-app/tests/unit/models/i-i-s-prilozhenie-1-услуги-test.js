import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-1-услуги', 'Unit | Model | i-i-s-prilozhenie-1-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-1-график-работы',
    'model:i-i-s-prilozhenie-1-график',
    'model:i-i-s-prilozhenie-1-запись-клиентов',
    'model:i-i-s-prilozhenie-1-клиенты',
    'model:i-i-s-prilozhenie-1-сотрудники',
    'model:i-i-s-prilozhenie-1-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
