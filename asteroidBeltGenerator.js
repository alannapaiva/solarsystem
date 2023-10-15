import * as THREE from 'three';

// Function to create an asteroid belt
export function createAsteroidBelt(minRadius, maxRadius, numAsteroids, heightRange, textureLoader) {
  // Create a Three.js group to hold the asteroids
  const asteroidGroup = new THREE.Group();
  // Create geometry, load and apply textute to the asteroids
  const asteroidGeometry = new THREE.SphereGeometry(0.01, 32, 32);
  const texturaAsteroids = textureLoader.load('./textures/asteroid.jpg');
  const asteroidMaterial = new THREE.MeshBasicMaterial({ map: texturaAsteroids });
  // Function to generate a random position within a circular area
  function randomPositionInCircle(minRadius, maxRadius) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (maxRadius - minRadius) + minRadius;
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    return { x, z };
  }
  // Generate and position a specified number of asteroids
  for (let i = 0; i < numAsteroids; i++) {
    const { x, z } = randomPositionInCircle(minRadius, maxRadius);
    const y = (Math.random() - 0.5) * heightRange;
    // Create an asteroid mesh, set its position, and add it to the group
    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
    asteroid.position.set(x, y, z);
    asteroidGroup.add(asteroid);
  }
  // Return the group containing all the asteroids
  return asteroidGroup;
}

  
  
  
  
  