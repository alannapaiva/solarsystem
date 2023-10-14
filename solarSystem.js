import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createStars } from './starsGenerator.js';
import { createOrbit } from './orbitalLineGenerator.js';
import { createAsteroidBelt } from './asteroidBeltGenerator.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10); 
camera.lookAt(0, 0, 0);

// Creates a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();



// Create background stars 
const stars = createStars(textureLoader, 1500); // Use the function from the imported module
scene.add(stars);



// Creates Sun
const texturaSun = textureLoader.load('./textures/sun_map.jpg');

const sunGeometry = new THREE.SphereGeometry(2.9, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ map: texturaSun })
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(0, 0, 0);
scene.add(sun);

// Creates Mercury
const texturaMercury = textureLoader.load('./textures/mercury_map.jpg');

const mercuryGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: texturaMercury });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);

// Creates Venus
const texturaVenus = textureLoader.load('./textures/venus_map.jpg');

const venusGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({ map: texturaVenus });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus)

// Creates Earth
const texturaEarth = textureLoader.load('./textures/earth_map.jpg');

const earthGeometry = new THREE.SphereGeometry(0.27, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ map: texturaEarth });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Creates Moon
const texturaMoon = textureLoader.load('./textures/moon_map.png');

const moonGeometry = new THREE.SphereGeometry(0.07, 32, 32);
const moonMaterial = new THREE.MeshBasicMaterial({ map: texturaMoon });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);

// Creates Mars
const texturaMars = textureLoader.load('./textures/mars_map.jpg');

const marsGeometry = new THREE.SphereGeometry(0.14, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ map: texturaMars });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);

// Creates Ceres
const texturaCeres = textureLoader.load('./textures/ceres_map.png'); 

const ceresGeometry = new THREE.SphereGeometry(0.03, 32, 32); 
const ceresMaterial = new THREE.MeshBasicMaterial({ map: texturaCeres });
const ceres = new THREE.Mesh(ceresGeometry, ceresMaterial);
ceres.position.set(1.5, 0, 0); 
scene.add(ceres);

// Creates Jupiter
const texturaJupiter = textureLoader.load('./textures/jupiter_map.jpg');

const jupiterGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: texturaJupiter });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);

// Creates Saturn
const texturaSaturn = textureLoader.load('./textures/saturn_map.jpg');

const saturnGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ map: texturaSaturn });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);

// Creates Saturn Rings
const texturaRing = textureLoader.load('./textures/saturnRings_map.jpeg');
const ringGeometry = new THREE.RingGeometry(0.1, 0.6, 100, 900); 
const ringMaterial = new THREE.MeshBasicMaterial({ map: texturaRing, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(ringGeometry, ringMaterial);
// Position the rings on the planet
saturnRing.position.copy(saturn.position);
scene.add(saturnRing);

// Creates Uranus
const texturaUranus = textureLoader.load('./textures/uranus_map.jpg');

const uranusGeometry = new THREE.SphereGeometry(0.17, 32, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ map: texturaUranus });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);

// Creates Neptune
const texturaNeptune = textureLoader.load('./textures/neptune_map.jpg');

const neptuneGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: texturaNeptune });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);

// Creates Pluto
const texturaPluto = textureLoader.load('./textures/pluto_map.jpg');

const plutoGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const plutoMaterial = new THREE.MeshBasicMaterial({ map: texturaPluto });
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
scene.add(pluto);

// Creates Eris
const texturaEris = textureLoader.load('./textures/eris_map.jpg');

const erisGeometry = new THREE.SphereGeometry(0.06, 32, 32);
const erisMaterial = new THREE.MeshBasicMaterial({ map: texturaEris });
const eris = new THREE.Mesh(erisGeometry, erisMaterial);
scene.add(eris);


// Generate asteroid belts
// Generate an asteroid belt between Mars and Jupiter
const asteroidBelt = createAsteroidBelt(7.1, 7.4, 2000, 0.5, textureLoader);
scene.add(asteroidBelt);
// Generate the Kuiper asteroid belt
const kuiperBelt = createAsteroidBelt(14.8, 22, 25000, 0.5, textureLoader);
scene.add(kuiperBelt);



// Set the initial positions of the planets
sun.position.x = 0;
mercury.position.x = 3.5;
venus.position.x = 4.5;
earth.position.x = 5.4;
moon.position.x = 1;
mars.position.x = 6.7
ceres.position.x = 7.1
jupiter.position.x = 8;
saturn.position.x = 10;
uranus.position.x = 12.8; 
neptune.position.x = 15; 
pluto.position.x = 16.5;
eris.position.x = 18.5;

// Create visible orbits for planets
const mercuryOrbit = createOrbit(3.5, 64); // mercury orbit line
scene.add(mercuryOrbit);
const venusOrbit = createOrbit(4.5, 64); // venus orbit line
scene.add(venusOrbit);
const earthOrbit = createOrbit(5.4, 64); // earth orbit line
scene.add(earthOrbit);
const orbit = createOrbit(1, 64); // moon orbit line
scene.add(mercuryOrbit);
const marsOrbit = createOrbit(6.7, 64); // mars orbit line
scene.add(marsOrbit);
const ceresOrbit = createOrbit(7.1, 64); // ceres orbit line
scene.add(ceresOrbit);
const jupterOrbit = createOrbit(8, 64); // jupter orbit line
scene.add(jupterOrbit);
const saturnOrbit = createOrbit(10, 64); // saturn orbit line
scene.add(saturnOrbit);
const uranusOrbit = createOrbit(12.8, 64); // uranus orbit line
scene.add(uranusOrbit);
const neptuneOrbit = createOrbit(15, 64); // neptune orbit line
scene.add(neptuneOrbit);
const plutoOrbit = createOrbit(16.5, 64); // pluto orbit line
scene.add(plutoOrbit);
const erisOrbit = createOrbit(18.5, 64); // eris orbit line
scene.add(erisOrbit);




// Camera orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
// Enable or disable specific features of OrbitControls, if necessary
controls.minDistance = 2; 
controls.maxDistance = 20; 
controls.update();

//Controle de interação com usuário
const aumentarVelocidade = document.getElementById("aumentarVelocidade");
const diminuirVelocidade = document.getElementById("diminuirVelocidade");
const reset = document.getElementById("reset");

let speed = 1;

aumentarVelocidade.addEventListener("click", ()=>{
  speed += 0.1;
  console.log(speed)
});

diminuirVelocidade.addEventListener("click", ()=>{
  speed -= 0.1;
  if(speed < 0){
    speed = 0;
  }
  console.log(speed)
});

reset.addEventListener("click", ()=>{
  speed = 1;
})

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate Stars
  stars.rotation.y += -0.0001;

  // Rotate Sun
  sun.rotation.y -= 0.02;
  
  // Rotate Mercury
  mercury.rotation.y += 0.021 * speed; // Orbit speed
  //Calculates the orbital radius
  mercury.position.x = 3.5 * Math.cos(mercury.rotation.y); 
  mercury.position.z = 3.5 * Math.sin(mercury.rotation.y);

  // Rotate Venus
  venus.rotation.y += 0.008 * speed; 
  venus.position.x = 4.5 * Math.cos(venus.rotation.y);
  venus.position.z = 4.5 * Math.sin(venus.rotation.y);

  // Rotate earth 
  earth.rotation.y +=0.0124 * speed;
  earth.position.x = 5.4 * Math.cos(earth.rotation.y);
  earth.position.z = 5.4 * Math.sin(earth.rotation.y);

  // Rotate the moon around the earth
  moon.rotation.y += 0.0434 * speed;
  moon.position.x = earth.position.x + 0.5 * Math.cos(moon.rotation.y);
  moon.position.z = earth.position.z + 0.5 * Math.sin(moon.rotation.y);

  // Rotate Mars
  mars.rotation.y += 0.0075 * speed; 
  mars.position.x = 6.7 * Math.cos(mars.rotation.y); 
  mars.position.z = 6.7 * Math.sin(mars.rotation.y); 

  // Rotate AsteroidBelt
  asteroidBelt.rotation.y -= 0.003;

  // Rotate Ceres
  ceres.rotation.y += 0.004; 
  ceres.position.x = 7.1 * Math.cos(ceres.rotation.y); 
  ceres.position.z = 7.1 * Math.sin(ceres.rotation.y); 

  // Rotate Jupiter
  jupiter.rotation.y += 0.0158 * speed; 
  jupiter.position.x = 8 * Math.cos(jupiter.rotation.y);
  jupiter.position.z = 8 * Math.sin(jupiter.rotation.y);

  // Rotate Saturn
  saturn.rotation.y += 0.0119 * speed; 
  saturn.position.x = 10 * Math.cos(saturn.rotation.y);
  saturn.position.z = 10 * Math.sin(saturn.rotation.y);
  // Rotate the ring by 45 degrees (in radians
  saturnRing.rotation.x = Math.PI / 4; // 45 graus em radianos
  // Update the position of Saturn's rings to coincide with Saturn
  saturnRing.position.copy(saturn.position);
  saturnRing.rotation.y = saturn.rotation.y; // Rings follows saturn rotation

  // Rotate Uranus
  uranus.rotation.y += 0.0065 * speed;
  uranus.position.x = 12.8 * Math.cos(uranus.rotation.y);
  uranus.position.z = 12.8 * Math.sin(uranus.rotation.y);

  // Rotate Neptune
  neptune.rotation.y += 0.0053 * speed;
  neptune.position.x = 15 * Math.cos(neptune.rotation.y);
  neptune.position.z = 15 * Math.sin(neptune.rotation.y);

  // Rotate Pluto
  pluto.rotation.y += 0.005 * speed;
  pluto.position.x = 16.5 * Math.cos(pluto.rotation.y);
  pluto.position.z = 16.5 * Math.sin(pluto.rotation.y);

  // Rotate Eris
  eris.rotation.y += 0.0045;
  eris.position.x = 18.5 * Math.cos(eris.rotation.y);
  eris.position.z = 18.5 * Math.sin(eris.rotation.y);

  //Rotate Kuiper asteroid belt
  kuiperBelt.rotation.y -= 0.0025;
  
  controls.update()

  renderer.render(scene, camera);
}

// Start the animation loop
animate();
