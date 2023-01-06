# Services

## Generalizations

Why are services useful? Instead of filling the controller with code to fetch weather data from a server, it’s better to move this independent logic into a service so that it can be reused by other parts of the app.

What can we generalize so far?

Directives are a way to make standalone UI components, like <app-info>

Services are a way to make standalone communication logic, like forecast which fetches weather data from a server
