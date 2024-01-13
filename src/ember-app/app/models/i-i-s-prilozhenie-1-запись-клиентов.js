import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьКлиентовMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-1-запись-клиентов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьКлиентовMixin, Validations, {
});

defineProjections(Model);

export default Model;
