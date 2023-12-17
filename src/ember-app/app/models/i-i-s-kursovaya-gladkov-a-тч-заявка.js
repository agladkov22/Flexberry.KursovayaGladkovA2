import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчЗаявкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-a-тч-заявка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчЗаявкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
