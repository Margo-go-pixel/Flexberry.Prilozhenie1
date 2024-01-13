import { Serializer as ЗаписьКлиентовSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-1-запись-клиентов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьКлиентовSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
