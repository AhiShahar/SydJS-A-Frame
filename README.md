__[Scene 1](https://ahishahar.github.io/SydJS-A-Frame/01-scene.html)__

__[Scene 2](https://ahishahar.github.io/SydJS-A-Frame/02-entity.html)__

__[Scene 3](https://ahishahar.github.io/SydJS-A-Frame/03-ground.html)__

__[Scene 4](https://ahishahar.github.io/SydJS-A-Frame/04-camera.html)__

__[Scene 5](https://ahishahar.github.io/SydJS-A-Frame/05-physics.html)__

__[Scene 6](https://ahishahar.github.io/SydJS-A-Frame/06-x-y-z.html)__

__[Scene 7](https://ahishahar.github.io/SydJS-A-Frame/07-grouping.html)__

__[Scene 8](https://ahishahar.github.io/SydJS-A-Frame/08-inspector.html)__

__[Scene 9](https://ahishahar.github.io/SydJS-A-Frame/09-assets.html)__

__[Scene 10](https://ahishahar.github.io/SydJS-A-Frame/10-animations.html)__

__[Scene 11](https://ahishahar.github.io/SydJS-A-Frame/11-interactive-bodies.html)__

__[Scene 12](https://ahishahar.github.io/SydJS-A-Frame/12-final-scene-component.html)__


# A-Frame Boilerplate

Boilerplate for creating WebVR scenes using A-Frame.

## Getting Started

There are two easy options for obtaining this A-Frame scene. It's then up to you to make it your own!

### <sup>Option 1:</sup> Download the ZIP kit 📦

[<img src="http://i.imgur.com/UVPZoM0.png" width="200">](https://github.com/aframevr/aframe-boilerplate/archive/master.zip)

After you have __[downloaded and extracted this `.zip` file](https://github.com/aframevr/aframe-boilerplate/archive/master.zip)__ containing the contents of this repo, open the resulting directory, and you'll be have your scene ready in these few steps:

    npm install && npm start
    open http://localhost:3000/

<hr>

### <small><sup>Option 2:</sup> Fork this Git repo 🍴🐙

Alternatively, you can __[fork this repo](https://github.com/aframevr/aframe-boilerplate/fork)__ to get started, if you'd like to maintain a Git workflow.

After you have __[forked this repo](https://github.com/aframevr/aframe-boilerplate/fork)__, clone a copy of your fork locally and you'll be have your scene ready in these few steps:

    git clone https://github.com/aframevr/aframe-boilerplate.git
    cd aframe-boilerplate && rm -rf .git && npm install && npm start
    open http://localhost:3000/

> :iphone: **Mobile pro tip:** Upon starting the development server, the URL will be logged to the console. Load that URL from a browser on your mobile device. (If your mobile phone and computer are not on the same LAN, consider using [ngrok](https://ngrok.com/) for local development and testing. [Browsersync](https://www.browsersync.io/) is also worth a gander.)

<hr>

### <small><sup>Option 3:</sup> Fork this CodePen example 🍴💾✒️

Or, you can simply __[fork this CodePen example](http://codepen.io/team/mozvr/pen/BjygdO?editors=100)__ to dive right in. Enjoy!


## Publishing your scene

If you don't already know, GitHub offers free and awesome publishing of static sites through __[https://pages.github.com/](GitHub Pages)__.

To publish your scene to your personal GitHub Pages:

    npm run deploy

And, it'll now be live at __http://`your_username`.github.io/__ :)

<hr>

To know which GitHub repo to deploy to, the `deploy` script first looks at the optional [`repository` key](https://docs.npmjs.com/files/package.json#repository) in the [`package.json` file](package.json) (see [npm docs](https://docs.npmjs.com/files/package.json#repository) for sample usage). If the `repository` key is missing, the script falls back to using the local git repo's remote origin URL (you can run the local command `git remote -v` to see all your remotes; also, you may refer to the [GitHub docs](https://help.github.com/articles/about-remote-repositories/) for more information).

<hr>

## Still need Help?

### Installation

First make sure you have Node installed.

On Mac OS X, it's recommended to use [Homebrew](http://brew.sh/) to install Node + [npm](https://www.npmjs.com):

    brew install node

To install the Node dependencies:

    npm install


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)

If you wish to serve the site from a different port:

    PORT=8000 npm start


## License

This program is free software and is distributed under an [MIT License](LICENSE).
