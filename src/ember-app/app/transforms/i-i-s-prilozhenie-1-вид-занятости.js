import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидЗанятостиEnum from '../enums/i-i-s-prilozhenie-1-вид-занятости';

export default FlexberryEnum.extend({
  enum: ВидЗанятостиEnum,
  sourceType: 'IIS.Prilozhenie_1.ВидЗанятости'
});
