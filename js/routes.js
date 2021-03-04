angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.mySedekah', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mySedekah.html',
        controller: 'mySedekahCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.contactInfo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo.html',
        controller: 'contactInfoCtrl'
      }
    }
  })

  .state('menu.contactInfo2', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo2.html',
        controller: 'contactInfo2Ctrl'
      }
    }
  })

  .state('menu.contactInfo3', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo3.html',
        controller: 'contactInfo3Ctrl'
      }
    }
  })

  .state('menu.tabungCovid19', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tabungCovid19.html',
        controller: 'tabungCovid19Ctrl'
      }
    }
  })

  .state('menu.misiBantuanMusimSejukSyria', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/misiBantuanMusimSejukSyria.html',
        controller: 'misiBantuanMusimSejukSyriaCtrl'
      }
    }
  })

  .state('menu.danaReunited', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/danaReunited.html',
        controller: 'danaReunitedCtrl'
      }
    }
  })

  .state('menu.nisaNegeriSabah', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nisaNegeriSabah.html',
        controller: 'nisaNegeriSabahCtrl'
      }
    }
  })

  .state('menu.rumahAnakYatimNurulIhsan', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rumahAnakYatimNurulIhsan.html',
        controller: 'rumahAnakYatimNurulIhsanCtrl'
      }
    }
  })

  .state('donationSuccessful', {
    url: '/page10',
    templateUrl: 'templates/donationSuccessful.html',
    controller: 'donationSuccessfulCtrl'
  })

  .state('menu.contactInfo4', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo4.html',
        controller: 'contactInfo4Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});