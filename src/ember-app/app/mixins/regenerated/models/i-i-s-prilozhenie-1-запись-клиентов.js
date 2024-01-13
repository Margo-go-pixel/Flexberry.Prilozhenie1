import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  датаЗаписи: DS.attr('date'),
  номерЗаписи: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-prilozhenie-1-клиенты', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-1-сотрудники', { inverse: null, async: false }),
  услуги: DS.belongsTo('i-i-s-prilozhenie-1-услуги', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-запись-клиентов.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаЗаписи: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-запись-клиентов.validations.датаЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЗаписи: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-запись-клиентов.validations.номерЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-запись-клиентов.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-запись-клиентов.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-запись-клиентов.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьКлиентовE', 'i-i-s-prilozhenie-1-запись-клиентов', {
    номерЗаписи: attr('Номер записи', { index: 0 }),
    клиенты: belongsTo('i-i-s-prilozhenie-1-клиенты', 'Клиенты', {
      фИОКлиента: attr('Ф и о клиента', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИОКлиента' }),
    услуги: belongsTo('i-i-s-prilozhenie-1-услуги', 'Услуги', {
      наименование: attr('Наименование', { index: 4, hidden: true }),
      стоимость: attr('Стоимость', { index: 5 })
    }, { index: 3, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-prilozhenie-1-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЗаписьКлиентовL', 'i-i-s-prilozhenie-1-запись-клиентов', {
    номерЗаписи: attr('Номер записи', { index: 0 }),
    клиенты: belongsTo('i-i-s-prilozhenie-1-клиенты', 'Ф и о клиента', {
      фИОКлиента: attr('Ф и о клиента', { index: 1 })
    }, { index: -1, hidden: true }),
    услуги: belongsTo('i-i-s-prilozhenie-1-услуги', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
