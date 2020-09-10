# AngularHttpMacroTaskMinimalReproduction

Run `npm install`

Run with `npx ng serve`

Open Chrome Browser to `http://localhost:4200`

# Reproduce Bug

1. Click Button **Make Successful Request** and see successul response.
1. Click Button **Check Task Counts** and see the open micro and macro task counts in the ngZone.
1. Click Button **Make Failed Request** and see the error response.
1. Click Button **Check Task Counts** again and notice that the macroTask count is now 1.
1. Repeat failed requests as many times as you like and the marcroTask count will just keep increasing.

