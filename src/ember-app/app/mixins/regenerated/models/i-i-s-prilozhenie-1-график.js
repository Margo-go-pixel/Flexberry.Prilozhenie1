import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  занятость: DS.attr('i-i-s-prilozhenie-1-вид-занятости'),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-1-сотрудники', { inverse: null, async: false }),
  графикРаботы: DS.belongsTo('i-i-s-prilozhenie-1-график-работы', { inverse: 'график', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  занятость: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график.validations.занятость.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  графикРаботы: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-график.validations.графикРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-prilozhenie-1-график', {
    сотрудники: belongsTo('i-i-s-prilozhenie-1-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должность: attr('Должность', { index: 2 })
    }, { index: 0, displayMemberPath: 'фИО' }),
    дата: attr('Дата', { index: 3 }),
    время: attr('Время', { index: 4 }),
    занятость: attr('Занятость', { index: 5 })
  });
};
