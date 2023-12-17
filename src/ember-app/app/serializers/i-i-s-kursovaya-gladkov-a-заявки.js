import { Serializer as ЗаявкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-a-заявки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаявкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
