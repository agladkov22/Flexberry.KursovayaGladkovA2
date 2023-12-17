import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-gladkov-a-материалы', 'Unit | Model | i-i-s-kursovaya-gladkov-a-материалы', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
