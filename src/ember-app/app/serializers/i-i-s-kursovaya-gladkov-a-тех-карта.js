import { Serializer as ТехКартаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-a-тех-карта';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТехКартаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
