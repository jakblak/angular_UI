#### [AngularUI Funamentals](http://www.pluralsight.com/courses/angularui-fundamentals)
- gulp watch          (runs port 9000)
- gulp injectjs        (injects new JS files into HTML)
- United theme from Bootswatch  (replaced bootstrap.css file)
- using azureWebsites for DB  --  elite-api.service     (CRUD functionality = read only) 
- teams.html does not load after clicking 'configure'

### Components
- ngAnimate, UI-Bootstrap, Bootstrap, LoDash, Moment, Spin.js, UI-Router

## UI-Bootstrap
- angular-bootstrap      *ui.bootstrap*     (eliminate jQuery dependency)
- in `leagues.html`: 
* edit *Nav button* to collapse menu on resize
* *collapse buttons* instead of table buttons
* - Hide/show edit buttons 
* add *Tooltip* to button
- in `home.html` add *toggle* button and *popover* for 'Additional Notes'
- setup *Tabs* using inline and deep linking methods  -- in 3 new controllers
- add *showHelpAlert* in leagues.html
- new *Modal* in `/shared` folder  
- - add *modalInstance* to `leagues.controller` as deleteItem function
- - encapsulate $modalInstance into a service = *dialogsService*
- - leauges.controller uses dialogs.service & displays message using confirm-modal.html
- - use *typeahead* for creating auto-complete suggestions in forms  (edit-teams.html)

## UI-Router
- based on $stateProvider     -     ui-view
- Supports: Route Resolvers, Nested states, Multiple states   (optional URL)
- replace .when with *.state*, and 'otherwise' with $urlRouterProvider
- use $stateParams instead of $route
- `ui-sref`  -- pass name of state to href, pass params with concise syntax
- use *$state.go* instead of $location (replace w/ $state)
- - implemented nested states and views for deep linking tabs in teams/leagues/games views
- create a `State Watcher` service to log state change events