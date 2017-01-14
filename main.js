let score = 0;
const scoreCount = document.querySelector(".score");

AFRAME.registerComponent('soccer-balls', {
  schema: {
    tagName:    { default: 'a-sphere' }, // set an entity shape
    primitiveParams: { default: ['dynamic-body', 'src:#ball', 'radius:0.2'] }, // basic geometry, skins and scaling
    maxCount:   { default: 1}, // Maximum balls on the scene
    interval:   { default: 50}, // how quickly to spawn the first balls
    locationTest: { default: 1000} // how often to check for goals
  },

  // Initialize the component, start tracking the balls and their lifetime
  init: function () {
    this.spheres = [];
    this.timeout = setInterval(this.spawn.bind(this), this.data.interval);
  },

  // generating a random position around the center of the field, 10 ~meter high
  randomPosition: function () {
    return {x: Math.random() * 10 - 5, y: 10, z: Math.random() * 10 - 5};
  },

  // if the number of balls still haven't reached maxCount, it will generate until it will
  spawn: function () {
    // once the set number of balls are in play, stop spawning and start recycling
    if (this.spheres.length >= this.data.maxCount) {
      clearTimeout(this.timeout);
      return;
    }
    const data = this.data,
        sphere = document.createElement(data.tagName);
    this.spheres.push(sphere);
    this.el.appendChild(sphere);
    sphere.setAttribute('position', this.randomPosition());
    data.primitiveParams.forEach(function (s) {
      const parts = s.split(':');
      sphere.setAttribute(parts[0], parts[1] || '');
    });

    // Objects dropping below the height of the field (out of the goals) will be recycled after a few seconds
    setInterval(function () {
      if (sphere.body.position.x < 35 & sphere.body.position.x > -35) return;
      score += 1;
      scoreCount.innerHTML = score;
      sphere.body.position.copy(this.randomPosition());
      sphere.body.velocity.set(0,0,0);
    }.bind(this), this.data.locationTest);
  }
});
