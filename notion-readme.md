# Software Engineer | Case Study

# **Prompt**

A contractor has a residential job in San Francisco. By answering the questionnaire below, PermitFlow can help the contractor determine if a permit is needed and the application process. 

Below is an example simplified residential workflow (adapted from [https://sfdbi.org/](https://www.google.com/url?q=https://sfdbi.org/&sa=D&source=editors&ust=1709576701929470&usg=AOvVaw13boQ0-KULK1nTjVfJ75ZK)).

## Questionnaire

1. What residential work are you doing? *(Note: a user can only select a single option).*

1. Interior work
    1. Exterior work

<aside>
🔀 Question Transition Logic

1. If `Interior work` is selected, then jump to `Question #2 - Interior Work` 
2. If `Exterior work` is selected, then jump to `Question #3 - Exterior Work`
</aside>

1. What interior work are you doing? *(Note: a user can select multiple options)*
    1. Bathroom remodel
    2. New bathroom
    3. New laundry room
    4. Other

<aside>
🔀 Question Transition Logic:

1. End questionnaire

Requirements Logic:

1. If `bathroom remodel` is selected, then `Over-the-Counter Submission Process` is required. 
2. Else, `In-House Review Process` is required.
</aside>

1. What exterior work are you doing? *Note: a user can select multiple options)*
    1. Garage door replacement
    2. Exterior doors
    3. Fencing
    4. Other

<aside>
🔀 Question Transition Logic:

1. End questionnaire

Requirements Logic:

1. *If `Other` is selected, then `In-house Review Process` is required.*
2. Else if `Garage door replacement` or `Exterior doors` is selected*, then `OTC Submission Process` is required.*  
3. Else,  `No Permit` is required. 
</aside>

## Permit Requirements

Given the input above, display the output below as stated and no additional work is required other than rendering the text here. Note that only 1 scenario is possible and below is in order of priority.  E.g. if In-House Review Process & OTC Submission Process is required, then we require In-House Review only.

<aside>
✅ **In-House Review Process**

- A building permit is required.
- Include plan sets.
- Submit application for in-house review.
</aside>

<aside>
✅ **Over-the-Counter Submission Process**

- A building permit is required.
- Submit application for OTC review.
</aside>

<aside>
❌ **No Permit**

- Nothing is required! You’re set to build.
</aside>

## Out of Scope

You do not need to address the following:

- Ability to differentiate submissions by user
- Authentication

---

# Technical Output

We recommend candidates spend 3 hours max here with a 1 week submission time bound. You're encouraged to ask any clarifying questions as well to make this a collaborative experience. Don't worry if you're not able to complete everything.

***How would you implement the frontend & backend for the above permitting scenario? Note for frontend only roles; backend implementation is not required.***

Deliverables:

1. Set up a UI & API (the API can be stubbed if you choose not to implement the backend) that powers the step form above. The user should be able to walk through the questions above and upon successful submission, output the list of requirements required to obtain the permit.
2. You’re welcome to use any starter code templates (e.g. CRA, create-next-app, etc.)
3. Create a database spec detailing how you would persist the result of the submission.
4. Assuming you have implemented an MVP, what would an optimal design look like if given more time (i.e. is your code extensible for additional use cases, permitting scenarios, and municipalities)?
5. [Optional] set up a backend and DB to power the FE.

## Assessment Scaffold

A completely optional blank Next.js application is available to help you speed up your PermitFlow assessment - [link here](https://www.google.com/url?q=https://drive.google.com/file/d/1FDQAt6sjbaVQWW19P7LTWgOZyfODgL1w/view?usp%3Dsharing&sa=D&source=editors&ust=1709576701934756&usg=AOvVaw18QZA4v1lkQ2gt-cx9kzR9). View the README for instructions.

Note that you’re recommended to choose a tech stack that you’re most comfortable with, but the preferred tech stack would be what we use currently:

1. React, TypeScript, Node.js, tRPC, Zod, Zustand, Fastify, Prisma

Once complete, please:

1. Create a ***private GitHub repo*** and add `permitfloweng` as a collaborator on the repo.
2. Create a README page with run instructions and video:
3. Create a high level video (~5m) overview recording for review of the UI flow as well as the code base (a [Loom](https://www.google.com/url?q=https://loom.com/&sa=D&source=editors&ust=1709576701935682&usg=AOvVaw3BkpfIBQsq9vBTsLEYG6kY) or YouTube unlisted video is preferred for easy sharing with our Eng team).
4. Submit via Ashby the assignment and & cc the recruiter / hiring manager with the link to the repo + video.

## Tips on what we’ll look for:

Correctness:

1. Does your code run?
2. Does the code capture all the requirements mentioned above correctly?

Coding:

1. Based on your chosen tech stack, did you demonstrate mastery / skill?
2. Did you write clean, reusable code?
3. Did you follow best practices?

Communication:

1. Does your video cover succinctly and simply the necessary details and decisions of your implementation?

Architecture (bonus section):

1. How flexible is your code? Is it extensible, generic, and can it scale to different use cases?
2. If not flexible given the time constraints, did you provide additional thoughts on how you would enhance the design if given more time?