import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ gladkov_ A',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ gladkov_ A',
          title: 'Kursovaya_ gladkov_ A'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
