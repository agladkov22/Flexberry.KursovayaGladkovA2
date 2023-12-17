import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  наименДетали: DS.attr('string'),
  номерДетали: DS.attr('number'),
  цена: DS.attr('decimal'),
  материалы: DS.belongsTo('i-i-s-kursovaya-gladkov-a-материалы', { inverse: null, async: false }),
  заявки: DS.belongsTo('i-i-s-kursovaya-gladkov-a-заявки', { inverse: 'тчЗаявка', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тч-заявка.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименДетали: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тч-заявка.validations.наименДетали.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДетали: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тч-заявка.validations.номерДетали.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тч-заявка.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тч-заявка.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заявки: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-тч-заявка.validations.заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчЗаявкаE', 'i-i-s-kursovaya-gladkov-a-тч-заявка', {
    номерДетали: attr('Номер детали', { index: 0 }),
    наименДетали: attr('Наимен детали', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    материалы: belongsTo('i-i-s-kursovaya-gladkov-a-материалы', 'Материалы', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });
};
