import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_1ГрафикРаботыLForm from './forms/i-i-s-prilozhenie-1-график-работы-l';
import IISPrilozhenie_1ЗаписьКлиентовLForm from './forms/i-i-s-prilozhenie-1-запись-клиентов-l';
import IISPrilozhenie_1КлиентыLForm from './forms/i-i-s-prilozhenie-1-клиенты-l';
import IISPrilozhenie_1СотрудникиLForm from './forms/i-i-s-prilozhenie-1-сотрудники-l';
import IISPrilozhenie_1УслугиLForm from './forms/i-i-s-prilozhenie-1-услуги-l';
import IISPrilozhenie_1ГрафикРаботыEForm from './forms/i-i-s-prilozhenie-1-график-работы-e';
import IISPrilozhenie_1ЗаписьКлиентовEForm from './forms/i-i-s-prilozhenie-1-запись-клиентов-e';
import IISPrilozhenie_1КлиентыEForm from './forms/i-i-s-prilozhenie-1-клиенты-e';
import IISPrilozhenie_1СотрудникиEForm from './forms/i-i-s-prilozhenie-1-сотрудники-e';
import IISPrilozhenie_1УслугиEForm from './forms/i-i-s-prilozhenie-1-услуги-e';
import IISPrilozhenie_1ГрафикРаботыModel from './models/i-i-s-prilozhenie-1-график-работы';
import IISPrilozhenie_1ГрафикModel from './models/i-i-s-prilozhenie-1-график';
import IISPrilozhenie_1ЗаписьКлиентовModel from './models/i-i-s-prilozhenie-1-запись-клиентов';
import IISPrilozhenie_1КлиентыModel from './models/i-i-s-prilozhenie-1-клиенты';
import IISPrilozhenie_1СотрудникиModel from './models/i-i-s-prilozhenie-1-сотрудники';
import IISPrilozhenie_1УслугиModel from './models/i-i-s-prilozhenie-1-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-1-график-работы': IISPrilozhenie_1ГрафикРаботыModel,
    'i-i-s-prilozhenie-1-график': IISPrilozhenie_1ГрафикModel,
    'i-i-s-prilozhenie-1-запись-клиентов': IISPrilozhenie_1ЗаписьКлиентовModel,
    'i-i-s-prilozhenie-1-клиенты': IISPrilozhenie_1КлиентыModel,
    'i-i-s-prilozhenie-1-сотрудники': IISPrilozhenie_1СотрудникиModel,
    'i-i-s-prilozhenie-1-услуги': IISPrilozhenie_1УслугиModel
  },

  'application-name': 'Prilozhenie_1',

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
        'application-name': 'Prilozhenie_1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_1',
          title: 'Prilozhenie_1'
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
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-prilozhenie-1-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-prilozhenie-1-график-работы-l': {
            caption: 'График работы',
            title: ''
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-prilozhenie-1-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-prilozhenie-1-запись-клиентов-l': {
            caption: 'Запись клиентов',
            title: ''
          }
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-prilozhenie-1-услуги-l': {
            caption: 'Услуги',
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
    'i-i-s-prilozhenie-1-график-работы-l': IISPrilozhenie_1ГрафикРаботыLForm,
    'i-i-s-prilozhenie-1-запись-клиентов-l': IISPrilozhenie_1ЗаписьКлиентовLForm,
    'i-i-s-prilozhenie-1-клиенты-l': IISPrilozhenie_1КлиентыLForm,
    'i-i-s-prilozhenie-1-сотрудники-l': IISPrilozhenie_1СотрудникиLForm,
    'i-i-s-prilozhenie-1-услуги-l': IISPrilozhenie_1УслугиLForm,
    'i-i-s-prilozhenie-1-график-работы-e': IISPrilozhenie_1ГрафикРаботыEForm,
    'i-i-s-prilozhenie-1-запись-клиентов-e': IISPrilozhenie_1ЗаписьКлиентовEForm,
    'i-i-s-prilozhenie-1-клиенты-e': IISPrilozhenie_1КлиентыEForm,
    'i-i-s-prilozhenie-1-сотрудники-e': IISPrilozhenie_1СотрудникиEForm,
    'i-i-s-prilozhenie-1-услуги-e': IISPrilozhenie_1УслугиEForm
  },

});

export default translations;
