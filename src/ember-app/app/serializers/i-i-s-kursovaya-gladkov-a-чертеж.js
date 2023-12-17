import { Serializer as ЧертежSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-a-чертеж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЧертежSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
