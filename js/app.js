//場景 相機 渲染器

let container;
let canvas;
let camera;
let renderer;
let scene;
let mountain;
let controls;

function init() {

  // container = document.querySelector(".app");

  //選擇容器
  canvas = document.querySelector('.app');

  //創建場景
  scene = new THREE.Scene();

  const fov = 5;
  const aspect = canvas.clientWidth / canvas.clientWidth;
  const near = 1;
  const far = 1000;

  //建立相機 Perspective Camera (透視相機)
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 25);



  //光源燈
  const ambient = new THREE.AmbientLight(0x404040, 10);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);

  //選染器
  renderer = new THREE.WebGLRenderer({

    canvas,

    antialias: true,

    alpha: true,


  });

  //載入模型
  let loader = new THREE.GLTFLoader();
  loader.load("../3d/mountain/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    mountain = gltf.scene.children[0];

  });

  // xyz輔助工具
  let helper = new THREE.AxesHelper(50);
  // scene.add(helper);


  //OrbitControls 滑鼠拖曳旋轉控制器

  controls = new THREE.OrbitControls(camera, canvas);

  controls.enableDamping = true; //拖拉慣性

  controls.campingFactor = 0.25;  //拖拉慣性阻尼參數搭配enableDamping使用

  controls.enableZoom = false; //相機變焦移動

  controls.enablePan = false; //相機平移

  controls.enableRotate = true;

  // controls.maxAzimuthAngle = 1;
  // controls.minAzimuthAngle = 1;

  //禁用垂直控制單軸
  controls.maxPolarAngle = 1;
  controls.minPolarAngle = 1;


  // maxAzimuthAngle


  controls.update();
}

//canvas 畫面自訂義

function resizeRendererToDisplaySize(renderer) {

  const canvas = renderer.domElement;

  const width = canvas.clientWidth;

  const height = canvas.clientHeight;

  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {

    renderer.setSize(width, height, false);

  }

  return needResize;

}

//動畫執行
function animate() {

  requestAnimationFrame(animate);

  if (mountain) {
    mountain.rotation.z += 0.001;
  }



  if (resizeRendererToDisplaySize(renderer)) {

    const canvas = renderer.domElement;

    camera.aspect = canvas.clientWidth / canvas.clientHeight;

    camera.updateProjectionMatrix();

  }

  renderer.render(scene, camera);
}

init();

animate();
