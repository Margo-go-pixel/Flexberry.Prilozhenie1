import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('string'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal')
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-услуги.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-услуги.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-prilozhenie-1-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    длительность: attr('Длительность', { index: 2 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-prilozhenie-1-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    длительность: attr('Длительность', { index: 2 })
  });
};
