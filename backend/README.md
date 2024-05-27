# Take home assessment for PermitFlow

### Author: Thomas Grundy

### Short description of approach taken
My data model of groups of questions, used to drive each screen in the questionnaire, which contain a series of questions,
their UI ordering and their logical ordering (allowing us to store in the DB, and for potential later backend UI configuration, a way
of dictating to the UI without it having to hardcode certain types of flows/questions).

I also store the questions themselves, which have a control type, e.g. a radio button or checkbox, allowing single and multi-select,
and how that question relates to an outcome.

Outcomes are either a series of strings the UI displays, or the next question group the UI should transition to. This could be
further extended to store some internal flow logic, like the questionGroups have.

I then have built the capability to store the chosen outcomes, for later retrieval if a user account system is made.
This part has been stubbed out in order to save time.

### How to build/run

The docker compose should let you just run this in docker, but if you don't want to do that, follow the below:

- Make sure you have Mongo installed and running on port 27017.
- `npm install` should install dependencies.
- `npm run build` will compile up all that Typescript goodness, so good.
- `npm dev` runs the server.
- `npm test` run the tests.

Please let me know if you need anything further from me! you can reach me at hireme@thomasgrundy.com.