import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаявки: DS.attr('date'),
  номерЗаявки: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-kursovaya-gladkov-a-клиенты', { inverse: null, async: false }),
  тчЗаявка: DS.hasMany('i-i-s-kursovaya-gladkov-a-тч-заявка', { inverse: 'заявки', async: false })
});

export let ValidationRules = {
  датаЗаявки: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-заявки.validations.датаЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЗаявки: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-заявки.validations.номерЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-заявки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчЗаявка: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-a-заявки.validations.тчЗаявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкиE', 'i-i-s-kursovaya-gladkov-a-заявки', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    датаЗаявки: attr('Дата заявки', { index: 1 }),
    клиенты: belongsTo('i-i-s-kursovaya-gladkov-a-клиенты', 'Клиенты', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    тчЗаявка: hasMany('i-i-s-kursovaya-gladkov-a-тч-заявка', 'Тч заявка', {
      номерДетали: attr('Номер детали', { index: 0 }),
      наименДетали: attr('Наимен детали', { index: 1 }),
      количество: attr('Количество', { index: 2 }),
      цена: attr('Цена', { index: 3 }),
      материалы: belongsTo('i-i-s-kursovaya-gladkov-a-материалы', 'Материалы', {
        наименование: attr('Наименование', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаявкиL', 'i-i-s-kursovaya-gladkov-a-заявки', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    датаЗаявки: attr('Дата заявки', { index: 1 }),
    клиенты: belongsTo('i-i-s-kursovaya-gladkov-a-клиенты', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
