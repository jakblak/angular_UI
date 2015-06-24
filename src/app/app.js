(function() {
  'use strict';
  var app = angular.module('eliteAdmin', [
    // Angular modules
    // 'ngRoute',
    'ui.bootstrap',
    'ui.router'
  ]);

  // app.config(['$stateParamsProvider', configRoutes]);
  app.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

  function configRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .state('leagues', {
        url: '/leagues',
        templateUrl: 'app/leagues/leagues.html',
        controller: 'LeaguesCtrl',
        controllerAs: 'vm',
        resolve: {
          // prepopulate data with the leagues
          initialData: ['eliteApi',
            function(eliteApi) {
              return eliteApi.getLeagues();
            }]
        }
      })
      .state('league', {
        url: '/leagues/:leagueId',
        abstract: true,              //must add ui-view to .html
        controller: 'LeagueShellCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/layout/league-shell.html'
      })
      .state('league.teams', {
        url: '/teams',
        views: {
          'tabContent': {
            templateUrl: 'app/teams/teams.html',
            controller: 'TeamsCtrl',
            controllerAs: 'vm',
            resolve: {
              initialData: ['$stateParams', 'eliteApi',
                function($stateParams, eliteApi) {
                  return eliteApi.getTeams($stateParams.leagueId);
                }]
            }
          }
        }

      })
      .state('league.games', {
        url: '/games',
        views: {
          'tabContent': {
            templateUrl: 'app/games/games.html',
            controller: 'GamesCtrl',
            controllerAs: 'vm',
            resolve: {
              initialData: ['$stateParams', 'gamesInitialDataService',
                function($stateParams, gamesInitialDataService) {
                  return gamesInitialDataService.getData($stateParams.leagueId);
                }]
            }
          }
        }
      })
      .state('league.home', {
        url: '/league-home',
        views: {
          'tabContent': {
            templateUrl: 'app/league-home/league-home.html',
            controller: 'LeagueHomeCtrl',
            controllerAs: 'vm',
            resolve: {
              initialData: ['$stateParams', 'eliteApi',
                function($stateParams, eliteApi) {
                  return eliteApi.getLeague($stateParams.id);
                }]
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }

  app.run(['$state', 'stateWatcherService',
    function($state, stateWatcherService) {
      // Include $stateParams to kick start the router.
    }
  ]);
})();