import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерКарты: DS.attr('number'),
  оборудование: DS.belongsTo('i-i-s-kursovaya-gladkov-a-оборудование', { inverse: null, async: false }),
  чертеж: DS.belongsTo('i-i-s-kursovaya-gladkov-a-чертеж', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тех-карта.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерКарты: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тех-карта.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тех-карта.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  чертеж: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тех-карта.validations.чертеж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТехКартаE', 'i-i-s-kursovaya-gladkov-a-тех-карта', {
    номерКарты: attr('Номер карты', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    чертеж: belongsTo('i-i-s-kursovaya-gladkov-a-чертеж', 'Чертеж', {
      номерЧертежа: attr('Номер чертежа', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номерЧертежа' }),
    оборудование: belongsTo('i-i-s-kursovaya-gladkov-a-оборудование', 'Оборудование', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТехКартаL', 'i-i-s-kursovaya-gladkov-a-тех-карта', {
    номерКарты: attr('Номер карты', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    чертеж: belongsTo('i-i-s-kursovaya-gladkov-a-чертеж', 'Номер чертежа', {
      номерЧертежа: attr('Номер чертежа', { index: 2 })
    }, { index: -1, hidden: true }),
    оборудование: belongsTo('i-i-s-kursovaya-gladkov-a-оборудование', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
