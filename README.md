# A Virtual Pet Game - Fox Game

For more notes refer here:-https://btholt.github.io/project-fox-game-site/

-We are going to use webpack bundler. It has a rich ecosystem. We will use parcel.

-npm i -D parcel-bundler - to install parcel - for developer tool (like i don't want parcel to ship to the web server)

-Never edit package-lock.json by hand. It locks all the version of the dependencies so when a someone reinstalls the project they can take all the versions from here.

-.cache will save a bunch of stuff so it doesn't have to recompile. It speeds up the build.

-dist folder will have all the compiled HTML, CSS and JavaScript from the the src files.

-.editorconfig is cross editor tool that is letting the editor know about the code formatting rules. It will let your team know how to set up the project. Most of the editors understand .editorconfig easily. 

-Why you need eslint and prettier both? eslint is about the style and what the code does and prettier is about how the code looks. Its confusing because eslint can do some work that prettier does on how the code looks but prettier does all of it. I set up eslint to look after the code style and the ignore the code formatting bit.

- plugin:import/errors - 
means you are trying to import a file or module that doesn't exist. so eslint will catch this kind of error.
