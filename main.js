/**
 * Rain of Entities component.
 *
 * Creates a spawner on the scene, which periodically generates new entities
 * and drops them from the sky. Objects falling below altitude=0 will be
 * recycled after a few seconds.
 *
 * Requires: physics
 */
 let teamA = 0;
 let teamB = 0;
 const scoreA = document.querySelector(".team-a");
 const scoreB = document.querySelector(".team-b");
AFRAME.registerComponent('rain-of-entities', {
  schema: {
    tagName:    { default: 'a-sphere' },
    components: { default: ['dynamic-body', 'force-pushable', 'src:#ball', 'radius:0.2'] },
    maxCount:   { default: 4, min: 0 },
    interval:   { default: 50, min: 0 },
    lifetime:   { default: 1000, min: 0 }
  },
  init: function () {
    this.spherees = [];
    this.timeout = setInterval(this.spawn.bind(this), this.data.interval);
  },
  spawn: function () {
    if (this.spherees.length >= this.data.maxCount) {
      clearTimeout(this.timeout);
      return;
    }
    const data = this.data,
        sphere = document.createElement(data.tagName);
    this.spherees.push(sphere);
    this.el.appendChild(sphere);
    sphere.setAttribute('position', this.randomPosition());
    data.components.forEach(function (s) {
      const parts = s.split(':');
      sphere.setAttribute(parts[0], parts[1] || '');
    });
    // Recycling is important, kids.
    setInterval(function () {
      if (sphere.body.position.y > 0) return;
      if (sphere.body.position.x > 35) {
        teamA += 1;
        scoreA.innerHTML = teamA;
      } else if (sphere.body.position.x > -35) {
        teamB += 1;
        scoreB.innerHTML = teamB;
      }
      sphere.body.position.copy(this.randomPosition());
      sphere.body.velocity.set(0,0,0);
    }.bind(this), this.data.lifetime);
  },
  randomPosition: function () {
    return {x: Math.random() * 10 - 5, y: 10, z: Math.random() * 10 - 5};
  }
});
