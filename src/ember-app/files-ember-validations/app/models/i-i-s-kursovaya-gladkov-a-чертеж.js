import {
  defineNamespace,
  defineProjections,
  Model as ЧертежMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-a-чертеж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЧертежMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
