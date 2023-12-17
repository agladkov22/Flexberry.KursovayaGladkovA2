import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерЧертежа: DS.attr('number'),
  утверждение: DS.attr('boolean'),
  тчЗаявка: DS.belongsTo('i-i-s-kursovaya-gladkov-a-тч-заявка', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-чертеж.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЧертежа: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-чертеж.validations.номерЧертежа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  утверждение: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-чертеж.validations.утверждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тчЗаявка: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-чертеж.validations.тчЗаявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧертежE', 'i-i-s-kursovaya-gladkov-a-чертеж', {
    номерЧертежа: attr('Номер чертежа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    утверждение: attr('Утверждение', { index: 2 }),
    тчЗаявка: belongsTo('i-i-s-kursovaya-gladkov-a-тч-заявка', 'Наимен детали', {
      наименДетали: attr('Наимен детали', { index: 3 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЧертежL', 'i-i-s-kursovaya-gladkov-a-чертеж', {
    номерЧертежа: attr('Номер чертежа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    утверждение: attr('Утверждение', { index: 2 }),
    тчЗаявка: belongsTo('i-i-s-kursovaya-gladkov-a-тч-заявка', 'Наимен детали', {
      наименДетали: attr('Наимен детали', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
