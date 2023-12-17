import {
  defineNamespace,
  defineProjections,
  Model as ТчЗаявкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-a-тч-заявка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчЗаявкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
