import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  наименование: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-1-сотрудники', { inverse: null, async: false }),
  график: DS.hasMany('i-i-s-prilozhenie-1-график', { inverse: 'графикРаботы', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график-работы.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график-работы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график-работы.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  график: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график-работы.validations.график.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикРаботыE', 'i-i-s-prilozhenie-1-график-работы', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-1-сотрудники', 'Сотрудники', {
      фИО: attr('Создал', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    график: hasMany('i-i-s-prilozhenie-1-график', 'График', {
      сотрудники: belongsTo('i-i-s-prilozhenie-1-сотрудники', 'Сотрудники', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должность: attr('Должность', { index: 2 })
      }, { index: 0, displayMemberPath: 'фИО' }),
      дата: attr('Дата', { index: 3 }),
      время: attr('Время', { index: 4 }),
      занятость: attr('Занятость', { index: 5 })
    })
  });

  modelClass.defineProjection('ГрафикРаботыL', 'i-i-s-prilozhenie-1-график-работы', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-1-сотрудники', 'Создал', {
      фИО: attr('Создал', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
