### EX 00 - Setup
- Setup was easy. I didnt run into any issues. 
- I had node installed previously.
- There is an issue with a image under:
  - "Beginner Path: Use a Starter Repository" 
  - "Configure TypeScript"
  - "Install and Start a Local Server"
- Maybe put "Choose an Editor" and "installing Angular 2" under the same chapter to get the exercises and chapter names to match up

### EX 01 - Hello World
- 3. Hello World explained what is going on here well.

![./screenshots/ex01Finish.png](./screenshots/ex01Finish.png)

### EX 02 - Create a Component 
- Change the gitbook title to "Create a Component" or this to "First Component"
- "Whats that syntax?" is blank.
- Names of files in gitbook are different than in example code. "home" here and "first.component.ts" in gitbook
- does the `selector` have to be the same as the class you export?
  - here the selector is 'first' when the class we export is First.
- The message doesnt seem to be showing up.
  - the data in the `first` component is not displayed in the browser.
  - do i put the {{message}} in the `first` component? or does this go in the parent component. not sure
  - is this how its supposed to look?
  
![./screenshots/ex02Finish.png](./screenshots/ex02Finish.png)
  
### EX 03 - Handling Clicks and Refs
- "Whats that Syntax?" needs to be filled in. Maybe go over #myInput in the input?
- looks like when you change a directory name "03" -> "src" you need to restart webpack. is there a way to do this automatically?

![./screenshots/ex03Finish.png](./screenshots/ex03Finish.png)

### EX 04 - Smart and Dumb Components
- Something that is confusing me is what goes in the `@Component` versus what goes in the class. Looks like data goes in the class and the `@Component` is declarative
  - As I type this out it, it makes sense that the decorator is giving the home class these attributes :smile:
- Is it a Common Convention to have classes like this: `PersonList` and selectors for that class like this: `person-list`?
- I didnt have to write any code for this to work. Not sure if that is how you want it set up.

![./screenshots/ex04Finish.png](./screenshots/ex04Finish.png)

### EX 05 - Templates, Styles, and Built-in Directives
- broken image under:
    - Gotchas
    - NgSwitchDefault *ngSwitchDefault
- "consistently always" seems redundant :D (under gotchas)
- good explanations. Answered my question about `*` at the end.
  
![./screenshots/ex05Finish.png](./screenshots/ex05Finish.png)
