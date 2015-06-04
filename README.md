#### [AngularUI Funamentals](http://www.pluralsight.com/courses/angularui-fundamentals)
- gulp watch          (runs port 9000)
- gulp injectjs        (injects new JS files into HTML)
- code files = setup/course.zip
- United theme from Bootswatch  (replaced bootstrap.css file)
- using azureWebsites for DB  --  elite-api.service     (CRUD functionality = read only)

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