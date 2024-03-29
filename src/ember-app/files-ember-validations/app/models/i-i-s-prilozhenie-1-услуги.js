import {
  defineNamespace,
  defineProjections,
  Model as УслугиMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-1-услуги';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УслугиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
