import { Serializer as ТчЗаявкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-a-тч-заявка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТчЗаявкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
