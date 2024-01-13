import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  кодКлиента: DS.attr('number'),
  фИОКлиента: DS.attr('string')
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-клиенты.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-клиенты.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОКлиента: {
    descriptionKey: 'models.i-i-s-prilozhenie-1-клиенты.validations.фИОКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-prilozhenie-1-клиенты', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фИОКлиента: attr('Ф и о клиента', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-prilozhenie-1-клиенты', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фИОКлиента: attr('Ф и о клиента', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 })
  });
};
