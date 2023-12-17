import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-gladkov-a-тч-заявка', 'Unit | Serializer | i-i-s-kursovaya-gladkov-a-тч-заявка', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-gladkov-a-тч-заявка',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-gladkov-a-состояние',

    'model:i-i-s-kursovaya-gladkov-a-заявки',
    'model:i-i-s-kursovaya-gladkov-a-клиенты',
    'model:i-i-s-kursovaya-gladkov-a-материалы',
    'model:i-i-s-kursovaya-gladkov-a-оборудование',
    'model:i-i-s-kursovaya-gladkov-a-склады',
    'model:i-i-s-kursovaya-gladkov-a-тех-карта',
    'model:i-i-s-kursovaya-gladkov-a-тч-заявка',
    'model:i-i-s-kursovaya-gladkov-a-чертеж',
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
