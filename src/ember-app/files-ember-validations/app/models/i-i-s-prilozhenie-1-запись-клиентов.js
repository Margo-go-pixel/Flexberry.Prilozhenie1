import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьКлиентовMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-1-запись-клиентов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьКлиентовMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
