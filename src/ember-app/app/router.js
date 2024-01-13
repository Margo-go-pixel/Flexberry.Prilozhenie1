import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-1-график-работы-l');
  this.route('i-i-s-prilozhenie-1-график-работы-e',
  { path: 'i-i-s-prilozhenie-1-график-работы-e/:id' });
  this.route('i-i-s-prilozhenie-1-график-работы-e.new',
  { path: 'i-i-s-prilozhenie-1-график-работы-e/new' });
  this.route('i-i-s-prilozhenie-1-запись-клиентов-l');
  this.route('i-i-s-prilozhenie-1-запись-клиентов-e',
  { path: 'i-i-s-prilozhenie-1-запись-клиентов-e/:id' });
  this.route('i-i-s-prilozhenie-1-запись-клиентов-e.new',
  { path: 'i-i-s-prilozhenie-1-запись-клиентов-e/new' });
  this.route('i-i-s-prilozhenie-1-клиенты-l');
  this.route('i-i-s-prilozhenie-1-клиенты-e',
  { path: 'i-i-s-prilozhenie-1-клиенты-e/:id' });
  this.route('i-i-s-prilozhenie-1-клиенты-e.new',
  { path: 'i-i-s-prilozhenie-1-клиенты-e/new' });
  this.route('i-i-s-prilozhenie-1-сотрудники-l');
  this.route('i-i-s-prilozhenie-1-сотрудники-e',
  { path: 'i-i-s-prilozhenie-1-сотрудники-e/:id' });
  this.route('i-i-s-prilozhenie-1-сотрудники-e.new',
  { path: 'i-i-s-prilozhenie-1-сотрудники-e/new' });
  this.route('i-i-s-prilozhenie-1-услуги-l');
  this.route('i-i-s-prilozhenie-1-услуги-e',
  { path: 'i-i-s-prilozhenie-1-услуги-e/:id' });
  this.route('i-i-s-prilozhenie-1-услуги-e.new',
  { path: 'i-i-s-prilozhenie-1-услуги-e/new' });
});

export default Router;
