import {
  defineNamespace,
  defineProjections,
  Model as ТехКартаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-a-тех-карта';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТехКартаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
