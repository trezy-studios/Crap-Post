# Contributing

You want to contribute to the project? Awesome!

## Things to know

By contributing to this repository, you are expected to know and follow the rules of general conduct outlined in our [Code of Conduct][code-of-conduct].

**Working on your first Pull Request?**
[How to Contribute to an Open Source Project on GitHub][egghead]

## How do

* Project setup?
  [We've got you covered!](#project-setup)

* Found a bug?
  [Let us know!][bugs]

* Patched a bug?
  [Make a PR!][new-pr]

* Adding a new feature?
  Please, *please*, ***please*** get some feedback from Trezy before you write any code. Don't waste your time building a feature that's already been struck down.

## Project setup

1. Fork and clone the repo
1. Setup environment variables (detailed in ["Some things you'll need"](#some-things-youll-need))
1. `$ yarn install` to install dependencies
1. `$ yarn run dev` to start up the dev server
1. Create a branch for your PR

### Some things you'll need

We follow a particular method of architecting our SCSS files You can find more information on that [here][css-arch-docs].

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/trezy-studios/Crap-Post.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream,"
> Then fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`.
> Then you can make all of your pull request branches based on this `master`
> branch. Whenever you want to update your version of `master`, do a regular
> `git pull`.

## Contributing as an Organization member

Below are steps which **MUST** be followed by all Trezy Studios org members. External collaborators only have to follow the above guidelines, but encouraged to adopt these same practices for consistency.

### Steps for development

1. Branch from `master` using the formatting rules below.
1. Do the work required to satisfy the Ticket or objective. If work unrelated to the objective needs to be done, make a separate branch.
1. Submit PR to merge back into `master`.
    * Any change which would affect current development should be documented in the description.
    * PRs for a ticket should be tagged in the title with the ticket. IE: `[#145] Fix bug`
    * Assign the PR to yourself.
    * The PR should be labeled with the label most fitting to the type of work. If the PR is a bugfix which must be merged to fix a major problem, it should be labeled `Urgent`.
    * When the PR is ready to be merged, A review should be requested from the `trezy-studios/web` team.
1. Once the PR is approved, it is the responsibility of the **assignee** to merge the changes to the branch.
1. Once the change is confirmed working, delete the working branch. If further changes need to be made, change them **on the same branch** and submit a new PR.

### Branch naming conventions

Work branches on the **main repo** are expected to follow this branch format:

```
type/000/objective
```
* **type** - The type of work being done. See below for types.
* **000** - Used when the working branch was created to satisfy an [issue][issues]. This should only be included if there is an associated issue.
* **objective** - a simple and breif descriptor of the work being done. words should be hyphen-delimited. e.g. `fix-toilet`, `redesign-products`, `add-button`

### Commit conventions

We use an interpretation of the angular commit conventions in this project. Generally squeaking, all commits should follow this pattern:
```
type(component): commit message
```
* **type** - The type of work done in the commit. See below for types.
* **component** - Should follow these rules:
    * If the file is a react component (in the Components directory), no suffix is needed. Just use the file name.
    * If the file is a helper file (in the helpers directory), just simply using `helpers` as the component will suffice.
    * If the file is documentation, no suffix is needed, however docs should **ALWAYS** have a commit type of `docs`.
    * All other files should generally follow the format of `filename-<best-describing-parentdir>` IE: `rescue-actions`, `index-page`, or `badge-scss`.
    * Remain as consistent in naming as possible. Use git history as precedence for the component name given to a file.
* **commit message** - should quickly summarize changes made. If there are multiple changes, multiline commit messages are allowed to fully summarize changes made.

If in doubt about component naming, try to dive into the commit history for the file in question. Ultimately ask if you're still confused. Use your best judgement, but prefer consistency over enforcing the rules set by this document. the point of these rules is to make searching through commits easier, and consistency helps the most.

Commits should be as samll as possible, with exceptions for large sweeping changes required by lint rule changes, package updates, etc.

If the commit **must** make changes to two or more **completely unrelated** files, the component name and parentheses are not required.

### Commit types
* `feat` - New feature.
* `fix` - Bug fix.
* `refactor` - A change in behavior of existing code.
* `docs` - A change in project documentation.
* `style` - Fixes which **only** fix code style and not behavior.
* `chore` - Maintenance tasks such as updating dependencies.

There is also 1 additional type allowed for branches **only**

* `experiment` - A new feature idea or major structural change which has a questionable outcome.





[code-of-conduct]: CODE_OF_CONDUCT.md
[css-arch-docs]: docs/CSS_ARCHITECTURE.md
[all-contributors]: https://github.com/kentcdodds/all-contributors
[bugs]: https://github.com/trezy-studios/Crap-Post/labels/bug
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[issues]: https://github.com/trezy-studios/Crap-Post/issues
[new-pr]: https://github.com/trezy-studios/Crap-Post/compare
