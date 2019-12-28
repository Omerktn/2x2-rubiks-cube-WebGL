"use strict";
let upL = 0;
let frL = 0;
let rgL = 0;
let dwL = 0;
let lfL = 0;
let bcL = 0;

let lock = 1;

let upFace = [1,2,3,4];
let dwFace = [8,7,6,5];
let rgFace = [3,2,6,7];
let lfFace = [1,4,8,5];
let frFace = [4,3,7,8];
let bcFace = [2,1,5,6];

var turner;

function shiftRight(vecf) {
  var out = [0,0,0,0];
  out[0] = vecf[3];
  out[1] = vecf[0];
  out[2] = vecf[1];
  out[3] = vecf[2];
  return out;
}
function shiftLeft(vecf) {
  var out = [0,0,0,0];
  out[0] = vecf[1];
  out[1] = vecf[2];
  out[2] = vecf[3];
  out[3] = vecf[0];
  return out;
}

var rotateCountX = [90,90,90,90,90,90,90,90];
var rotateCountY = [90,90,90,90,90,90,90,90];
var rotateCountZ = [90,90,90,90,90,90,90,90];

function buttonU() {
  if(lock) {
      upL = -1; dwL = 0;
      rotateCountY[upFace[0]-1] = 0;
      rotateCountY[upFace[1]-1] = 0;
      rotateCountY[upFace[2]-1] = 0;
      rotateCountY[upFace[3]-1] = 0;
      // Select the face that will turn

      upFace = shiftRight(upFace);
      turner = upFace;

      lfFace[0] = upFace[0];
      lfFace[1] = upFace[3];

      rgFace[0] = upFace[2];
      rgFace[1] = upFace[1];

      frFace[0] = upFace[3];
      frFace[1] = upFace[2];

      bcFace[0] = upFace[1];
      bcFace[1] = upFace[0];

  }
}
function buttonUr() {
  if(lock) {
      upL = 1; dwL = 0;
      rotateCountY[upFace[0]-1] = 0;
      rotateCountY[upFace[1]-1] = 0;
      rotateCountY[upFace[2]-1] = 0;
      rotateCountY[upFace[3]-1] = 0;

      upFace = shiftLeft(upFace);
      turner = upFace;
      // Left Face
      lfFace[0] = upFace[0];
      lfFace[1] = upFace[3];
      // Right
      rgFace[0] = upFace[2];
      rgFace[1] = upFace[1];
      // Front
      frFace[0] = upFace[3];
      frFace[1] = upFace[2];
      // Back
      bcFace[0] = upFace[1];
      bcFace[1] = upFace[0];

  }
}
function buttonD() {
  if(lock) {
      dwL = 1; upL = 0;
      rotateCountY[dwFace[0]-1] = 0;
      rotateCountY[dwFace[1]-1] = 0;
      rotateCountY[dwFace[2]-1] = 0;
      rotateCountY[dwFace[3]-1] = 0;
      // Select the face that will turn

      dwFace = shiftRight(dwFace);
      turner = dwFace;

      lfFace[2] = dwFace[0];
      lfFace[3] = dwFace[3];

      rgFace[2] = dwFace[2];
      rgFace[3] = dwFace[1];

      frFace[2] = dwFace[1];
      frFace[3] = dwFace[0];

      bcFace[2] = dwFace[3];
      bcFace[3] = dwFace[2];
  }
}
function buttonDr() {
  if(lock) {
      dwL = -1; upL = 0;
      rotateCountY[dwFace[0]-1] = 0;
      rotateCountY[dwFace[1]-1] = 0;
      rotateCountY[dwFace[2]-1] = 0;
      rotateCountY[dwFace[3]-1] = 0;
      // Select the face that will turn

      dwFace = shiftLeft(dwFace);
      turner = dwFace;

      lfFace[2] = dwFace[0];
      lfFace[3] = dwFace[3];

      rgFace[2] = dwFace[2];
      rgFace[3] = dwFace[1];

      frFace[2] = dwFace[1];
      frFace[3] = dwFace[0];

      bcFace[2] = dwFace[3];
      bcFace[3] = dwFace[2];
  }
}
function buttonF() {
  if(lock) {
      frL = 1; dwL = 0;
      rotateCountX[frFace[0]-1] = 0;
      rotateCountX[frFace[1]-1] = 0;
      rotateCountX[frFace[2]-1] = 0;
      rotateCountX[frFace[3]-1] = 0;

      frFace = shiftRight(frFace);
      turner = frFace;
      // Left Face
      lfFace[1] = frFace[0];
      lfFace[2] = frFace[3];
      // Right
      rgFace[0] = frFace[1];
      rgFace[3] = frFace[2];
      // Front
      upFace[2] = frFace[1];
      upFace[3] = frFace[0];
      // Down
      dwFace[0] = frFace[3];
      dwFace[1] = frFace[2];
  }
}
function buttonFr() {
  if(lock) {
      frL = -1; dwL = 0;
      rotateCountX[frFace[0]-1] = 0;
      rotateCountX[frFace[1]-1] = 0;
      rotateCountX[frFace[2]-1] = 0;
      rotateCountX[frFace[3]-1] = 0;

      frFace = shiftLeft(frFace);
      turner = frFace;
      // Left Face
      lfFace[1] = frFace[0];
      lfFace[2] = frFace[3];
      // Right
      rgFace[0] = frFace[1];
      rgFace[3] = frFace[2];
      // Front
      upFace[2] = frFace[1];
      upFace[3] = frFace[0];
      // Down
      dwFace[0] = frFace[3];
      dwFace[1] = frFace[2];
  }
}
function buttonB() {
  if(lock) {
      bcL = -1; frL = 0;
      rotateCountX[bcFace[0]-1] = 0;
      rotateCountX[bcFace[1]-1] = 0;
      rotateCountX[bcFace[2]-1] = 0;
      rotateCountX[bcFace[3]-1] = 0;

      bcFace = shiftRight(bcFace);
      turner = bcFace;

      lfFace[0] = bcFace[1];
      lfFace[3] = bcFace[2];

      rgFace[1] = bcFace[0];
      rgFace[2] = bcFace[3];

      upFace[0] = bcFace[1];
      upFace[1] = bcFace[0];

      dwFace[2] = bcFace[3];
      dwFace[3] = bcFace[2];
  }
}
function buttonBr() {
  if(lock) {
      bcL = 1; frL = 0;
      rotateCountX[bcFace[0]-1] = 0;
      rotateCountX[bcFace[1]-1] = 0;
      rotateCountX[bcFace[2]-1] = 0;
      rotateCountX[bcFace[3]-1] = 0;

      bcFace = shiftLeft(bcFace);
      turner = bcFace;

      lfFace[0] = bcFace[1];
      lfFace[3] = bcFace[2];

      rgFace[1] = bcFace[0];
      rgFace[2] = bcFace[3];

      upFace[0] = bcFace[1];
      upFace[1] = bcFace[0];

      dwFace[2] = bcFace[3];
      dwFace[3] = bcFace[2];
  }
}
function buttonR() {
  if(lock) {
      rgL = 1; lfL = 0;
      rotateCountZ[rgFace[0]-1] = 0;
      rotateCountZ[rgFace[1]-1] = 0;
      rotateCountZ[rgFace[2]-1] = 0;
      rotateCountZ[rgFace[3]-1] = 0;

      rgFace = shiftRight(rgFace);
      turner = rgFace;

      bcFace[0] = rgFace[1];
      bcFace[3] = rgFace[2];

      frFace[1] = rgFace[0];
      frFace[2] = rgFace[3];

      upFace[1] = rgFace[1];
      upFace[2] = rgFace[0];

      dwFace[1] = rgFace[3];
      dwFace[2] = rgFace[2];
  }
}

function buttonRr() {
  if(lock) {
      rgL = -1; lfL = 0;
      rotateCountZ[rgFace[0]-1] = 0;
      rotateCountZ[rgFace[1]-1] = 0;
      rotateCountZ[rgFace[2]-1] = 0;
      rotateCountZ[rgFace[3]-1] = 0;

      rgFace = shiftLeft(rgFace);
      turner = rgFace;

      bcFace[0] = rgFace[1];
      bcFace[3] = rgFace[2];

      frFace[1] = rgFace[0];
      frFace[2] = rgFace[3];

      upFace[1] = rgFace[1];
      upFace[2] = rgFace[0];

      dwFace[1] = rgFace[3];
      dwFace[2] = rgFace[2];
  }
}
function buttonL() {
  if(lock) {
      lfL = -1; rgL = 0;
      rotateCountZ[lfFace[0]-1] = 0;
      rotateCountZ[lfFace[1]-1] = 0;
      rotateCountZ[lfFace[2]-1] = 0;
      rotateCountZ[lfFace[3]-1] = 0;

      lfFace = shiftRight(lfFace);
      turner = lfFace;

      frFace[0] = lfFace[1];
      frFace[3] = lfFace[2];

      bcFace[1] = lfFace[0];
      bcFace[2] = lfFace[3];

      upFace[0] = lfFace[0];
      upFace[3] = lfFace[1];

      dwFace[0] = lfFace[2];
      dwFace[3] = lfFace[3];
  }
}
function buttonLr() {
  if(lock) {
      lfL = 1; rgL = 0;
      rotateCountZ[lfFace[0]-1] = 0;
      rotateCountZ[lfFace[1]-1] = 0;
      rotateCountZ[lfFace[2]-1] = 0;
      rotateCountZ[lfFace[3]-1] = 0;

      lfFace = shiftLeft(lfFace);
      turner = lfFace;

      frFace[0] = lfFace[1];
      frFace[3] = lfFace[2];

      bcFace[1] = lfFace[0];
      bcFace[2] = lfFace[3];

      upFace[0] = lfFace[0];
      upFace[3] = lfFace[1];

      dwFace[0] = lfFace[2];
      dwFace[3] = lfFace[3];
  }
}

function updatePos(obj, id) {
  if ((upL == 1 || dwL == 1) && turner.includes(id) && rotateCountY[id-1] < 90) {
    obj.transform.rotation = mult(rotateY(1), obj.transform.rotation);
    rotateCountY[id-1] += 1;
    if (rotateCountY[id-1] >= 90) {
      lock = 1;
    } else {
      lock = 0;
    }
  }
  else if ((upL == -1 || dwL == -1) && turner.includes(id) && rotateCountY[id-1] < 90) {
    obj.transform.rotation = mult(rotateY(-1), obj.transform.rotation);
    rotateCountY[id-1] += 1;
    if (rotateCountY[id-1] >= 90) {
      lock = 1;
    } else {
      lock = 0;
    }
  }
  else if ((frL == 1 || bcL == 1) && turner.includes(id) && rotateCountX[id-1] < 90) {
    obj.transform.rotation = mult(rotateX(-1), obj.transform.rotation);
    rotateCountX[id-1] += 1;
    if (rotateCountX[id-1] >= 90) {
      lock = 1;
    } else {
      lock = 0;
    }
  }
  else if ((frL == -1 || bcL == -1) && turner.includes(id) && rotateCountX[id-1] < 90) {
    obj.transform.rotation = mult(rotateX(1), obj.transform.rotation);
    rotateCountX[id-1] += 1;
    if (rotateCountX[id-1] >= 90) {
      lock = 1;
    } else {
      lock = 0;
    }
  }
  else if ((rgL == 1 || lfL == 1) && turner.includes(id) && rotateCountZ[id-1] < 90) {
    obj.transform.rotation = mult(rotateZ(1), obj.transform.rotation);
    rotateCountZ[id-1] += 1;
    if (rotateCountZ[id-1] >= 90) {
      lock = 1;
    } else {
      lock = 0;
    }
  }
  else if ((rgL == -1 || lfL == -1) && turner.includes(id) && rotateCountZ[id-1] < 90) {
    obj.transform.rotation = mult(rotateZ(-1), obj.transform.rotation);
    rotateCountZ[id-1] += 1;
    if (rotateCountZ[id-1] >= 90) {
      lock = 1;
    } else {
      lock = 0;
    }
  }

}

function hideShowPanel() {
  var x = document.getElementById("slider-sec");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function setupGameObjects(gl) {
  const gameObjects = {};
  let spc = 0.05

  gameObjects["cube1"] = new Cube(
    gl,
    vec4(1.0, 1.0, 0.0, 1.0), // UP
    vec4(1.0, 0.5, 0.0, 1.0), // LEFT
    vec4(0.0, 0.0, 0.0, 1.0),
    vec4(0.0, 0.0, 0.0, 1.0),
    vec4(0.0, 0.0, 0.0, 1.0),
    vec4(0.0, 1.0, 0.0, 1.0), // BACK
    new Transform({ translation: translate(-0.5-spc, spc, 0.5+spc) })
  );
  gameObjects["cube1"].startFunction = function(obj) {
    // start function runs only once just before the first draw.
    //// save the initial translation
    obj.userData["initialTranslation"] = obj.transform.translation;
    //obj.transform.rotation = mult(rotateY(2), obj.transform.rotation);
  };
  gameObjects["cube1"].updateFunction = function(obj) {
  // update function runs for each draw operation
  let id = 1;
  updatePos(obj, id);
};


  gameObjects["cube2"] = new Cube(
    gl,
    vec4(1.0, 1.0, 0.0, 1.0),
    vec4(1.0, 0.5, 0, 1.0),
    vec4(0, 0, 1, 1.0), // FRONT
    vec4(0, 0, 0, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(0, 0, 0, 1.0),
    new Transform({ translation: translate(0.5+spc, spc, 0.5+spc) })
  );
  gameObjects["cube2"].startFunction = function(obj) {
    // start function runs only once just before the first draw.
    //// save the initial translation
    obj.userData["initialTranslation"] = obj.transform.translation;
  };
  gameObjects["cube2"].updateFunction = function(obj) {
  // update function runs for each draw operation
  let id = 4;
  updatePos(obj, id);
};

  gameObjects["cube3"] = new Cube(
    gl,
    vec4(1.0, 1.0, 0.0, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(0, 0, 1, 1.0), // FRONT
    vec4(0, 0, 0, 1.0),
    vec4(1, 0, 0, 1.0), // RIGHT
    vec4(0, 0, 0, 1.0), // BACK
    new Transform({ translation: translate(0.5+spc, spc, -0.5-spc) })
  );
  gameObjects["cube3"].startFunction = function(obj) {
    // start function runs only once just before the first draw.
    //// save the initial translation
    obj.userData["initialTranslation"] = obj.transform.translation;
  };
  gameObjects["cube3"].updateFunction = function(obj) {
  // update function runs for each draw operation
  let id = 3;
  updatePos(obj, id);
};

  gameObjects["cube4"] = new Cube(
    gl,
    vec4(1.0, 1.0, 0.0, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(1, 0, 0, 1.0), // RIGHT
    vec4(0, 1, 0, 1.0), // BACK
    new Transform({ translation: translate(-0.5-spc, spc, -0.5-spc) })
  );
  gameObjects["cube4"].startFunction = function(obj) {
    // start function runs only once just before the first draw.
    //// save the initial translation
    obj.userData["initialTranslation"] = obj.transform.translation;
  };
  gameObjects["cube4"].updateFunction = function(obj) {
  // update function runs for each draw operation
  let id = 2;
  updatePos(obj, id);
};


  /// ----------------------- Bottom face --------------------
  gameObjects["cube5"] = new Cube(
    gl,
    vec4(0, 0, 0, 1.0),
    vec4(1, 0.5, 0, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(1, 1, 1, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(0, 1, 0, 1.0),
    new Transform({ translation: translate(-0.5-spc, -1-spc, 0.5+spc) })
  );
  gameObjects["cube5"].startFunction = function(obj) {
    // start function runs only once just before the first draw.
    //// save the initial translation
    obj.userData["initialTranslation"] = obj.transform.translation;
  };
  gameObjects["cube5"].updateFunction = function(obj) {
  // update function runs for each draw operation
  let id = 5;
  updatePos(obj, id);
};

gameObjects["cube6"] = new Cube(
  gl,
  vec4(0., 0., 0., 1.0),
  vec4(0, 0, 0, 1.0),
  vec4(0, 0, 0, 1.0),
  vec4(1, 1, 1, 1.0),
  vec4(1, 0, 0, 1.0),
  vec4(0, 1, 0, 1.0),
  new Transform({ translation: translate(-0.5-spc, -1-spc, -0.5-spc) })
);
gameObjects["cube6"].startFunction = function(obj) {
  // start function runs only once just before the first draw.
  //// save the initial translation
  obj.userData["initialTranslation"] = obj.transform.translation;
};
gameObjects["cube6"].updateFunction = function(obj) {
// update function runs for each draw operation
let id = 6;
updatePos(obj, id);
};

gameObjects["cube7"] = new Cube(
  gl,
  vec4(0, 0, 0, 1.0),
  vec4(0, 0, 0, 1.0),
  vec4(0, 0, 1, 1.0), //FRONT
  vec4(1, 1, 1, 1.0),
  vec4(1, 0, 0, 1.0),
  vec4(0, 0, 0, 1.0),
  new Transform({ translation: translate(0.5+spc, -1-spc, -0.5-spc) })
);
gameObjects["cube7"].startFunction = function(obj) {
  // start function runs only once just before the first draw.
  //// save the initial translation
  obj.userData["initialTranslation"] = obj.transform.translation;
};
gameObjects["cube7"].updateFunction = function(obj) {
// update function runs for each draw operation
let id = 7;
updatePos(obj, id);
};


  gameObjects["cube8"] = new Cube(
    gl,
    vec4(0, 0, 0, 1.0),
    vec4(1, 0.5, 0, 1.0),
    vec4(0, 0, 1, 1.0),
    vec4(1, 1, 1, 1.0),
    vec4(0, 0, 0, 1.0),
    vec4(0, 0, 0, 1.0),
    new Transform({ translation: translate(0.5+spc, -1-spc, 0.5+spc) })
  );
  gameObjects["cube8"].startFunction = function(obj) {
    // start function runs only once just before the first draw.
    //// save the initial translation
    obj.userData["initialTranslation"] = obj.transform.translation;
  };
  gameObjects["cube8"].updateFunction = function(obj) {
  // update function runs for each draw operation
  let id = 8;
  updatePos(obj, id);
};
  //// return all the objects
  return gameObjects;
}
// setup game END


//// camera parameters
var near;
var far;
var radius;
var theta;
var phi;
var fov;
var aspect;
var eye;
const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);

//// a class that represents the gameobject transform matrices
class Transform {
  constructor({
    scaling = mat4(),
    translation = mat4(),
    rotation = mat4()
  } = {}) {
    this.scaling = scaling;
    this.translation = translation;
    this.rotation = rotation;
  }
  modelMatrix() {
    return mult(this.rotation, mult(this.scaling, this.translation));
  }
}

//// base class for game objects
class GameObject {
  constructor(gl, transform) {
    //// the user can use object to store arbitrary values
    this.userData = {};

    //// WebGL rendering context
    this.gl = gl;

    //// the program objects obtained from shaders
    this.program = initShaders(gl, "vertex-shader", "fragment-shader");

    //// Model view projection matrices
    this.transform = transform;
    this.viewMatrix = mat4();
    this.projectionMatrix = mat4();

    this.updateFunction = -1;
    this.startFunction = -1;
  }

  update() {
    if (this.updateFunction != -1) {
      this.updateFunction(this);
    }
  }
  start() {
    if (this.startFunction != -1) {
      this.startFunction(this);
    }
  }
}

//// Cube is a game object
class Cube extends GameObject {
  constructor(gl, color1,color2,color3,color4,color5,color6, transform) {
    super(gl, transform);

    //// Model buffers and attributes
    [this.pointsArray, this.colorsArray] = cubePointsAndColors( color1,color2,color3,color4,color5,color6);
    this.numVertices = 36;
    this.initAttributeBuffers();

    //// Uniform Locations
    this.modelViewProjectionMatrixLoc = gl.getUniformLocation(
      this.program,
      "modelViewProjectionMatrix"
    );
  }

  initAttributeBuffers() {
    //// color attribute
    this.cBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      flatten(this.colorsArray),
      this.gl.STATIC_DRAW
    );
    this.vColor = this.gl.getAttribLocation(this.program, "vColor");

    //// position attribute
    this.vBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      flatten(this.pointsArray),
      this.gl.STATIC_DRAW
    );
    this.vPosition = this.gl.getAttribLocation(this.program, "vPosition");
  }

  draw() {
    //// color attribute
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cBuffer);
    this.gl.vertexAttribPointer(this.vColor, 4, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.vColor);

    //// position attribute
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBuffer);
    this.gl.vertexAttribPointer(this.vPosition, 4, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.vPosition);

    //// modelViewProjectionMatrix uniform
    const modelViewProjectionMatrix = mult(
      this.projectionMatrix,
      mult(this.viewMatrix, this.transform.modelMatrix())
    );
    this.gl.uniformMatrix4fv(
      this.modelViewProjectionMatrixLoc,
      false,
      flatten(modelViewProjectionMatrix)
    );

    //// draw
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.numVertices);
  }
} // class Cube

window.onload = function init() {
  document.addEventListener('keydown', keyDownHandler, false);

  const gl = setupWebGL();

  const gameObjects = setupGameObjects(gl);

  setupGUI();

  //// run the start() of all game objects and then do the first rendering
  for (const [name, gameObject] of Object.entries(gameObjects)) {
    gameObject.start();
  }
  render(gl, gameObjects);
};

var clockwise = 1;
function keyDownHandler(event) {
  if(event.keyCode == 85) {
    if (clockwise) {
    buttonU();} else{
      buttonUr();
    }
  } else if(event.keyCode == 82) {
    if (clockwise) {
    buttonR();} else{
      buttonRr();
    }
  }
  else if(event.keyCode == 76) {
    if (clockwise) {
    buttonL();} else{
      buttonLr();
    }
  }
  else if(event.keyCode == 68) {
    if (clockwise) {
  buttonD();} else{
    buttonDr();
  }
  }
  else if(event.keyCode == 66) {
    if (clockwise) {
   buttonB();} else{
     buttonBr();
   }
  }
  else if(event.keyCode == 70) {
    if (clockwise) {
   buttonF();} else{
  buttonFr();
}
}

if(event.keyCode == 81) {
  clockwise = 1;
}
if(event.keyCode == 87) {
  clockwise = 0;
}
}


function render(gl, gameObjects) {
  //// clear the background
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  //// camera settings
  eye = vec3(
    radius * Math.sin(theta) * Math.cos(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(theta)
  );
  const viewMatrix = lookAt(eye, at, up);
  const projectionMatrix = perspective(fov, aspect, near, far);

  //// draw all objects
  for (const [name, gameObject] of Object.entries(gameObjects)) {

    gameObject.update();
    gameObject.viewMatrix = viewMatrix;
    gameObject.projectionMatrix = projectionMatrix;
    gl.useProgram(gameObject.program);
    gameObject.draw();
  }
  //// call self for recursion
  requestAnimFrame(() => render(gl, gameObjects));
}

function setupWebGL() {
  const canvas = document.getElementById("gl-canvas");
  const gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {
    alert("WebGL isn't available");
  }
  gl.viewport(0, 0, canvas.width, canvas.height);
  aspect = canvas.width / canvas.height;
  gl.clearColor(0.3, 0.3, 0.3, 1.0);
  gl.enable(gl.DEPTH_TEST);


  return gl;
}

////
function setupGUI() {
  far = document.getElementById("zFarSlider").value;
  document.getElementById("zFarSlider").oninput = function(event) {
    far = event.target.value;
    document.getElementById("zFarValue").innerHTML = far;
  };

  near = document.getElementById("zNearSlider").value;
  document.getElementById("zNearSlider").oninput = function(event) {
    near = event.target.value;
    document.getElementById("zNearValue").innerHTML = near;
  };

  radius = document.getElementById("radiusSlider").value;
  document.getElementById("radiusSlider").oninput = function(event) {
    radius = event.target.value;
    document.getElementById("radiusValue").innerHTML = radius;
  };

  theta = document.getElementById("thetaSlider").value;
  document.getElementById("thetaSlider").oninput = function(event) {
    theta = (event.target.value * Math.PI) / 180.0;
    document.getElementById("thetaValue").innerHTML = event.target.value;
  };

  phi = document.getElementById("phiSlider").value;
  document.getElementById("phiSlider").oninput = function(event) {
    phi = (event.target.value * Math.PI) / 180.0;
    document.getElementById("phiValue").innerHTML = event.target.value;
  };

  document.getElementById("aspectSlider").value = aspect;
  document.getElementById("aspectValue").innerHTML = aspect;
  document.getElementById("aspectSlider").oninput = function(event) {
    aspect = event.target.value;
    document.getElementById("aspectValue").innerHTML = aspect;
  };

  fov = document.getElementById("fovSlider").value;
  document.getElementById("fovSlider").oninput = function(event) {
    fov = event.target.value;
    document.getElementById("fovValue").innerHTML = fov;
  };

}

////
function cubePointsAndColors(color1, color2, color3, color4, color5, color6) {
  var pointsArray = [];
  var colorsArray = [];
  var vertices = [
    vec4(-0.5, 0, 0.5, 1.0),
    vec4(-0.5, 1, 0.5, 1.0),
    vec4(0.5, 1, 0.5, 1.0),
    vec4(0.5, 0, 0.5, 1.0),
    vec4(-0.5, 0, -0.5, 1.0),
    vec4(-0.5, 1, -0.5, 1.0),
    vec4(0.5, 1, -0.5, 1.0),
    vec4(0.5, 0, -0.5, 1.0)
  ];
  var vertexColors = [color1, color2, color3, color4, color5, color6, color1, color1];
  function quad(a, b, c, d) {
    pointsArray.push(vertices[a]);
    colorsArray.push(vertexColors[a]);
    pointsArray.push(vertices[b]);
    colorsArray.push(vertexColors[a]);
    pointsArray.push(vertices[c]);
    colorsArray.push(vertexColors[a]);
    pointsArray.push(vertices[a]);
    colorsArray.push(vertexColors[a]);
    pointsArray.push(vertices[c]);
    colorsArray.push(vertexColors[a]);
    pointsArray.push(vertices[d]);
    colorsArray.push(vertexColors[a]);
  }

  quad(1, 0, 3, 2);
  quad(2, 3, 7, 6);
  quad(3, 0, 4, 7);
  quad(6, 5, 1, 2);
  quad(4, 5, 6, 7);
  quad(5, 4, 0, 1);
  return [pointsArray, colorsArray];
}
