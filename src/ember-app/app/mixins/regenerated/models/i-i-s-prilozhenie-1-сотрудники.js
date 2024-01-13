import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  должность: DS.attr('string'),
  кодСотрудника: DS.attr('number'),
  контакты: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-сотрудники.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-сотрудники.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-сотрудники.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-prilozhenie-1-сотрудники', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 }),
    контакты: attr('Контакты', { index: 3 }),
    датаРождения: attr('Дата рождения', { index: 4 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-prilozhenie-1-сотрудники', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 }),
    контакты: attr('Контакты', { index: 3 }),
    датаРождения: attr('Дата рождения', { index: 4 })
  });
};
