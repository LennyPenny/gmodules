# GModules
Repository for keeping track of all those GMod binary modules

## Game Plan
- User logs in with GitHub
- User's OAuth token is stored for queries
- When user submits a module, we use the https://developer.github.com/v3/repos/forks/ for api to fork the repo, then we use https://developer.github.com/v3/repos/contents/#create-a-file to create a file, then we use https://developer.github.com/v3/pulls/#create-a-pull-request to create a PR.

- Admin logs in with GitHub
- We check if they have write access to the repo with https://developer.github.com/v3/repos/collaborators/#get
- Then we display a fancy ui with a list of PR's (module requests) with https://developer.github.com/v3/pulls/#list-pull-requests
- Then we give them an accept/reject button with https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button and possibly https://developer.github.com/v3/pulls/#update-a-pull-request to close

- For listing the modules, we just iterate through the files in the repo and make them pretty with js/css
