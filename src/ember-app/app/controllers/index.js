import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-prilozhenie-1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-1-сотрудники-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-1-график-работы-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-1-график-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-1-график-работы-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-prilozhenie-1-клиенты-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-prilozhenie-1-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-prilozhenie-1-клиенты-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-1-запись-клиентов-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-prilozhenie-1-запись-клиентов-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-prilozhenie-1-запись-клиентов-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-prilozhenie-1-услуги-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-prilozhenie-1-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-prilozhenie-1-услуги-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})