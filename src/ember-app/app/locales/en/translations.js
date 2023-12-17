import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya_Gladkov_AЗаявкиLForm from './forms/i-i-s-kursovaya-gladkov-a-заявки-l';
import IISKursovaya_Gladkov_AКлиентыLForm from './forms/i-i-s-kursovaya-gladkov-a-клиенты-l';
import IISKursovaya_Gladkov_AМатериалыLForm from './forms/i-i-s-kursovaya-gladkov-a-материалы-l';
import IISKursovaya_Gladkov_AОборудованиеLForm from './forms/i-i-s-kursovaya-gladkov-a-оборудование-l';
import IISKursovaya_Gladkov_AСкладыLForm from './forms/i-i-s-kursovaya-gladkov-a-склады-l';
import IISKursovaya_Gladkov_AТехКартаLForm from './forms/i-i-s-kursovaya-gladkov-a-тех-карта-l';
import IISKursovaya_Gladkov_AЧертежLForm from './forms/i-i-s-kursovaya-gladkov-a-чертеж-l';
import IISKursovaya_Gladkov_AЗаявкиEForm from './forms/i-i-s-kursovaya-gladkov-a-заявки-e';
import IISKursovaya_Gladkov_AКлиентыEForm from './forms/i-i-s-kursovaya-gladkov-a-клиенты-e';
import IISKursovaya_Gladkov_AМатериалыEForm from './forms/i-i-s-kursovaya-gladkov-a-материалы-e';
import IISKursovaya_Gladkov_AОборудованиеEForm from './forms/i-i-s-kursovaya-gladkov-a-оборудование-e';
import IISKursovaya_Gladkov_AСкладыEForm from './forms/i-i-s-kursovaya-gladkov-a-склады-e';
import IISKursovaya_Gladkov_AТехКартаEForm from './forms/i-i-s-kursovaya-gladkov-a-тех-карта-e';
import IISKursovaya_Gladkov_AЧертежEForm from './forms/i-i-s-kursovaya-gladkov-a-чертеж-e';
import IISKursovaya_Gladkov_AЗаявкиModel from './models/i-i-s-kursovaya-gladkov-a-заявки';
import IISKursovaya_Gladkov_AКлиентыModel from './models/i-i-s-kursovaya-gladkov-a-клиенты';
import IISKursovaya_Gladkov_AМатериалыModel from './models/i-i-s-kursovaya-gladkov-a-материалы';
import IISKursovaya_Gladkov_AОборудованиеModel from './models/i-i-s-kursovaya-gladkov-a-оборудование';
import IISKursovaya_Gladkov_AСкладыModel from './models/i-i-s-kursovaya-gladkov-a-склады';
import IISKursovaya_Gladkov_AТехКартаModel from './models/i-i-s-kursovaya-gladkov-a-тех-карта';
import IISKursovaya_Gladkov_AТчЗаявкаModel from './models/i-i-s-kursovaya-gladkov-a-тч-заявка';
import IISKursovaya_Gladkov_AЧертежModel from './models/i-i-s-kursovaya-gladkov-a-чертеж';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-gladkov-a-заявки': IISKursovaya_Gladkov_AЗаявкиModel,
    'i-i-s-kursovaya-gladkov-a-клиенты': IISKursovaya_Gladkov_AКлиентыModel,
    'i-i-s-kursovaya-gladkov-a-материалы': IISKursovaya_Gladkov_AМатериалыModel,
    'i-i-s-kursovaya-gladkov-a-оборудование': IISKursovaya_Gladkov_AОборудованиеModel,
    'i-i-s-kursovaya-gladkov-a-склады': IISKursovaya_Gladkov_AСкладыModel,
    'i-i-s-kursovaya-gladkov-a-тех-карта': IISKursovaya_Gladkov_AТехКартаModel,
    'i-i-s-kursovaya-gladkov-a-тч-заявка': IISKursovaya_Gladkov_AТчЗаявкаModel,
    'i-i-s-kursovaya-gladkov-a-чертеж': IISKursovaya_Gladkov_AЧертежModel
  },

  'application-name': 'Kursovaya_ gladkov_ A',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ gladkov_ A',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ gladkov_ A',
          title: 'Kursovaya_ gladkov_ A'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'kursovaya-gladkov-a': {
          caption: 'Kursovaya_Gladkov_A',
          title: 'Kursovaya_Gladkov_A',
          'i-i-s-kursovaya-gladkov-a-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-a-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-a-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-a-тех-карта-l': {
            caption: 'Тех карта',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-a-заявки-l': {
            caption: 'Заявки',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-a-чертеж-l': {
            caption: 'Чертеж',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-a-материалы-l': {
            caption: 'Материалы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-gladkov-a-заявки-l': IISKursovaya_Gladkov_AЗаявкиLForm,
    'i-i-s-kursovaya-gladkov-a-клиенты-l': IISKursovaya_Gladkov_AКлиентыLForm,
    'i-i-s-kursovaya-gladkov-a-материалы-l': IISKursovaya_Gladkov_AМатериалыLForm,
    'i-i-s-kursovaya-gladkov-a-оборудование-l': IISKursovaya_Gladkov_AОборудованиеLForm,
    'i-i-s-kursovaya-gladkov-a-склады-l': IISKursovaya_Gladkov_AСкладыLForm,
    'i-i-s-kursovaya-gladkov-a-тех-карта-l': IISKursovaya_Gladkov_AТехКартаLForm,
    'i-i-s-kursovaya-gladkov-a-чертеж-l': IISKursovaya_Gladkov_AЧертежLForm,
    'i-i-s-kursovaya-gladkov-a-заявки-e': IISKursovaya_Gladkov_AЗаявкиEForm,
    'i-i-s-kursovaya-gladkov-a-клиенты-e': IISKursovaya_Gladkov_AКлиентыEForm,
    'i-i-s-kursovaya-gladkov-a-материалы-e': IISKursovaya_Gladkov_AМатериалыEForm,
    'i-i-s-kursovaya-gladkov-a-оборудование-e': IISKursovaya_Gladkov_AОборудованиеEForm,
    'i-i-s-kursovaya-gladkov-a-склады-e': IISKursovaya_Gladkov_AСкладыEForm,
    'i-i-s-kursovaya-gladkov-a-тех-карта-e': IISKursovaya_Gladkov_AТехКартаEForm,
    'i-i-s-kursovaya-gladkov-a-чертеж-e': IISKursovaya_Gladkov_AЧертежEForm
  },

});

export default translations;
