import * as THREE from 'three';

export function createAsteroidBelt(minRadius, maxRadius, numAsteroids, heightRange, textureLoader) {
  const asteroidGroup = new THREE.Group();
  
  const asteroidGeometry = new THREE.SphereGeometry(0.01, 32, 32);
  const texturaAsteroids = textureLoader.load('./textures/asteroid.jpg');
  const asteroidMaterial = new THREE.MeshBasicMaterial({ map: texturaAsteroids });

  function randomPositionInCircle(minRadius, maxRadius) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (maxRadius - minRadius) + minRadius;
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    return { x, z };
  }

  for (let i = 0; i < numAsteroids; i++) {
    const { x, z } = randomPositionInCircle(minRadius, maxRadius);
    const y = (Math.random() - 0.5) * heightRange;
    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
    asteroid.position.set(x, y, z);
    asteroidGroup.add(asteroid);
  }

  return asteroidGroup;
}

  
  
  
  
  