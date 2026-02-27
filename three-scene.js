const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("hero-3d").appendChild(renderer.domElement);

/* Luz */
const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(5,5,5);
scene.add(light);

/* Geometria */
const geometry = new THREE.SphereGeometry(2, 64, 64);
const texture = new THREE.TextureLoader().load('logo.png');
const material = new THREE.MeshStandardMaterial({
  map: texture,
  metalness: 0.6,
  roughness: 0.3
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 6;

/* Animação */
function animate(){
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();