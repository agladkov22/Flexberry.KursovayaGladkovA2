import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-gladkov-a-заявки-l');
  this.route('i-i-s-kursovaya-gladkov-a-заявки-e',
  { path: 'i-i-s-kursovaya-gladkov-a-заявки-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-заявки-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-заявки-e/new' });
  this.route('i-i-s-kursovaya-gladkov-a-клиенты-l');
  this.route('i-i-s-kursovaya-gladkov-a-клиенты-e',
  { path: 'i-i-s-kursovaya-gladkov-a-клиенты-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-клиенты-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-клиенты-e/new' });
  this.route('i-i-s-kursovaya-gladkov-a-материалы-l');
  this.route('i-i-s-kursovaya-gladkov-a-материалы-e',
  { path: 'i-i-s-kursovaya-gladkov-a-материалы-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-материалы-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-материалы-e/new' });
  this.route('i-i-s-kursovaya-gladkov-a-оборудование-l');
  this.route('i-i-s-kursovaya-gladkov-a-оборудование-e',
  { path: 'i-i-s-kursovaya-gladkov-a-оборудование-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-оборудование-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-оборудование-e/new' });
  this.route('i-i-s-kursovaya-gladkov-a-склады-l');
  this.route('i-i-s-kursovaya-gladkov-a-склады-e',
  { path: 'i-i-s-kursovaya-gladkov-a-склады-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-склады-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-склады-e/new' });
  this.route('i-i-s-kursovaya-gladkov-a-тех-карта-l');
  this.route('i-i-s-kursovaya-gladkov-a-тех-карта-e',
  { path: 'i-i-s-kursovaya-gladkov-a-тех-карта-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-тех-карта-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-тех-карта-e/new' });
  this.route('i-i-s-kursovaya-gladkov-a-чертеж-l');
  this.route('i-i-s-kursovaya-gladkov-a-чертеж-e',
  { path: 'i-i-s-kursovaya-gladkov-a-чертеж-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-a-чертеж-e.new',
  { path: 'i-i-s-kursovaya-gladkov-a-чертеж-e/new' });
});

export default Router;
