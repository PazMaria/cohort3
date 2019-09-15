
This project is the "Getting Started" project for EvovleU Full Stack Development program. It is a baseline to demonstrate:

- development environment
- development tools
- best practices

## Required Tools

The following tools are required to run the sample project:

- git - If you do not have git installed see [git](https://git-scm.com). To check enter:
```sh
git --version
```
- Node - If you do not have Node installed see [node](https://nodejs.org/en/). To check enter: 
```sh
node -v
```
- VSCode - If you do not have VSCode installed see [VSCode](https://code.visualstudio.com/).
- live-server - is a little development server with live reload capability. 
```sh
install -g live-server
```

## Setup Instructions

For the following instructions use your command line. In Windows, it could be dos or PowerShell. For mac and Linux use terminal.

1. Clone this repository. In your command line move to the directory that you would like to use as your base code directory. This command will add a directory below the directory you are in.
```sh
git clone https://github.com/larryevolveu/01-getting-started.git
```
2. Install the dependencies required for the project. This command looks at the 'package.json' file and installs all of the dependencies. 
```sh
cd 01-getting-started
npm -i
```
3. Run the tests to ensure the code works as advertised. 
```sh
cd src
cd mod1
npm test
```
All the tests should run.

4. Start a simple development server with live load capabilities 
```sh
live-server
```
Look through the application. Notice in the "Size" section there is some logic that based on a number will tell you if it is small / medium / large.

## Dissecting what's there

Let's start looking at this simple application. First, you will notice that the HTML and CSS in the project are fairly complicated. Like it or not the design and layout is what sells. The functionality is expected to work. 

As Full Stack Developers, we will often be expected to contribute or even write the design component of the project. For the next six months, we will be concentrating on the Programing component and not focusing on the design component. That does not mean that it's not important.

1. Notice the directory structure. It may not be exact, but it will be close.
```
01-getting-started/
  node_modules/
  src/
    mod1/
      images/
      scripts/
      index.css
      index.html
  package.json
  README.md
```
2. At your leisure, look through the HTML and CSS and figure out how it works. For now, let's look at the simple logic component.
3. In file src/mod1/index.html search for "idSize". Let's drill into how that works. Look at src/mod1/scripts. We will spend some time here.
