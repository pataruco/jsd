class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>01 Command line & data types</h1>
</div>

---

## Learning Objectives

---

## The terminal

<div class="row">
  <ul>
    <li> Also known as terminal, console or CLI</li>
    <li> Allows you to interact with your computer faster</li>
    <li> Lets you perform tasks that would usually be difficult through the graphical user interface </li>(GUI)
  </ul>
  <picture>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Appleterminal2.png" alt="macoOs terminal">
  </picture>
</div>

---

## Shell

A generic name for the primary programme that runs inside a Terminal. Common shell programmes include:

<dl>
  <dt>Bash (Bourne-Again Shell)</dt>
  <dd>
    <picture class="image-one-fourth">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg"  alt="bash">
    </picture>
  </dd>
  <dt>ZSH (oh-my-zsh)</dt>
  <dd>
    <picture class="image-one-fourth">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Oh_My_Zsh_logo.png" alt="ZSH">
    </picture>
  </dd>
  <dt>Powershell</dt>
  <dd>
  </dd>
</dl>

---

## Terminal commands

Here are some common UNIX commands that you'll want to get familiar with as they'll be important for you to know as you're working on the terminal!

| Command | Description                        | Command | Description                                         |
| ------- | ---------------------------------- | ------- | --------------------------------------------------- |
| `ls`    | List the contents of the directory | `code`  | Open VS Code text                                   |
| `cd`    | Change directories                 | `pwd`   | Present working directory                           |
| `mkdir` | Create a new folder                | `say`   | Make your computer talk                             |
| `rmdir` | Remove an empty folder             | `open`  | Open a particular file in their default application |
| `rm`    | Remove a file                      | `./`    | The current folder                                  |
| `touch` | Create an empty file               | `../`   | One folder above your current working directory     |
| `echo`  | Return a string                    | `~/`    | The home folder                                     |

---

## Code along

???

1.  Navigate to your Documents Folder from your root directory. `cd ~` and then `cd Documents`

2.  Create a directory named Advanced_JS. `mkdir advanced_js`

3.  Change into this directory. `cd advanced_js`

4.  Create a file named _index.html_ using the touch command. `touch index.html`

5.  Demonstrate how to open **"index.html"** in VS Codde from the terminal. `code`

6.  Using HTML comments type "This is how you should take notes in class." Some students will need a refresher on how to write HTML comments (i.e. `<!-- comment -->`). Briefly explain comments and let them know we'll be talking more about comments in the next lesson.

7.  Create an empty directory within the Advanced JS folder and remove it. `mkdir test_folder ` and `rmdir test_folder `

---

## Group practice

- Navigate to the desktop
- Create a directory called films
- Go into this directory
- Create a file for your favourite film called [FILM NAME].txt
- Open this file in VSCode
- Create 3 more files using a single terminal command
- Open the entire directory inside VSCode so you can see all 4 files and make some changes (remember to save the changes)
- Delete your least 2 favourite films

---

## Individual practice

1. Within your <em>JSD</em> folder, create a folder titled <em>goals</em>.
2. Navigate into the goals folder, then create three empty files:

   - goals.html
   - worries.html
   - index.html

3. Open Visual Studio Code, click **File > Open**, navigate to your newly created JSD/goals folder, then open it. All 3 files you created should be displayed in your editor's sidebar.

In the respective files (goals.html and worries.html), write your top three goals and top three worries for this course.

<em>Reminder:</em> to create an ordered list in HTML, use the following structure:

```html
<ol>
  <li>Item 1 content</li>
  <li>Item 2 content</li>
</ol>
```

---

## Individual practice (cont.)

4. Paste the following contents into index.html:

```html
<html>
  <head></head>
  <body>
    <p>
      <a href="goals.html">
        <img src="http://i.imgur.com/dosK05U.gif" />
      </a>
    </p>

    <p>
      <a href="worries.html">
        <img src="http://i.imgur.com/2s0HwpM.gif" />
      </a>
    </p>
  </body>
</html>
```

---

## Individual practice (cont.)

5. Save your changes to all 3 files.

6. Open index.html with your browser **(Right Click > Open In Default Browser)**. Each image is a link to one of the other files you created.

7. Follow each link, then make sure you see your goals and worries in the linked files.

```html
<style>
  em {
    color: yellow;
  }
</style>
```

---

## Git

<div class="row">
  <ul>
    <li> Git is a distributed <em>version control system</em></li>
    <li> Programmers use Git to keep a history of changes to code (dif)</li>
    <li> This allows us to <em>rollback</em> changes (or switch to older versions) as far back in time as they started using Git on their project!</li>
  </ul>
  <picture class="image-one-fourth">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="git">
  </picture>
</div>

---

## GitHub

<div class="row">
  <ul>
    <li>An online hosting service for Git <em>repositories</em></li>
    <li>A web interface to explore Git repositories</li>
    <li>A hosting service in the cloud</li>
    <li>A social network of programmers</li>
    <li>A centralised place for programmers to share and collaborate on projects</li>
  </ul>
  <picture class="image-one-fourth">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg" alt="github">
  </picture>
</div>

---

## Git and GitHub terminology

- **Repository**: (repo) contains all of a projects files (the code)
- **Clone**: a git command that copies/clones a repo to your local
- **Commit**: a snapshot of the code that has been saved to the projects history
- **Push**: a git command that sends your commits (saved changes) to a remote repository (on GitHub)
- **Pull**: a git command that ‘pulls’ any changes pushed by other developers to your local

---

## Local vs. remote

<div class="row">
  <section>
    <h3>Local</h3>
    <ul>
      <li>Repository on your own machine</li>
      <li>Similar to saving on MS Word</li>
    </ul> 
  </section>
  <section>
    <h3>Remote</h3>
    <ul>
      <li>Code is stored in the cloud, making it accessible by others</li>
      <li>Similar to saving on Google Drive</li>
    </ul> 
  </section>
</div>

---

## Using git during the course

- **Homework**: we will push our code to a specified homework repository
- **Resources**: starter code and solutions for code alongs and labs
- **Projects**: you will create your own repositories to store the source code for your projects

---

## Code along

### `git pull` your first repo

---

## Node.js

<div class="row">
  <ul>
    <li>Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications</li>
    <li>Interprets JS using Chrome’s V8 engine</li>
    <li>Faster execution with non-blocking asynchronous input/output</li>
    <li>Written in C, C++ and JS (so it’s not a JS framework!)</li>
    <li>Allows us to run JavaScript from our terminal applications</li>
    <li>Creating and running scripts</li>
    <li>File management</li>
    <li>Creating a backend server for a web app</li>
  </ul>
  <picture class="image-one-fourth">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="node.js">
  </picture>
</div>

---

## JavaScript variables

- Containers for data that allow us to store values
- The name often describes what the value is
- Allows our program to remember values for us to use later on
- The action of saving a value to a variable is called an assignment

---

## JavaScript variables

- `let`: the value can be reassigned later in the code (mutable)
- `const`: the value is constant and can not be changed (immutable)

```node
> let name = "pedro"
undefined
> name
'pedro'
> name = 'ana'
'ana'
> const lastname = 'martin'
undefined
> lastname
'martin'
> lastname = 'valera'
Uncaught TypeError: Assignment to constant variable.
```

---

## Creating variables

```javascript
const firstName = 'Pedro';
let birthDate = new Date('1978-07-18');
```

| keyword | name        | assigment operator | value                    |
| ------- | ----------- | ------------------ | ------------------------ |
| `const` | `firstname` | `=`                | `Pedro`                  |
| `let`   | `birthDate` | `=`                | `new Date('1978-07-18')` |

---

## Creating variables

|                       | `var`                  | `let`       | `const`     |
| --------------------- | ---------------------- | ----------- | ----------- |
| Hoisted               | ✅                     | ❌          | ❌          |
| Supports reassignment | ✅                     | ✅          | ❌          |
| Scope                 | `function` or `global` | block `{ }` | block `{ }` |

### Note

Use `const` unless you need to reassign a value (then use `let`)

---

## Code along

???

Get students to start a node REPL and execute basic calculations showing the difference between const let and var

Get them to exit the REPL

Send them the js file in class01 folder and get them to open it in NODE

---

## Primitive data types

Primitives are the most basic data types.

They are immutable (cannot change) and are copied by value.

In JavaScript they include:

- Strings: `"Larry"`
- Numbers: `-9.5`
- Booleans: `true`
- `Null`
- `Undefined`
