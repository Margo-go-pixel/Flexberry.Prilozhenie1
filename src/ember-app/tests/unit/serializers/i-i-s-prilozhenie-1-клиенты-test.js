import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-1-клиенты', 'Unit | Serializer | i-i-s-prilozhenie-1-клиенты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-1-клиенты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-1-вид-занятости',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
