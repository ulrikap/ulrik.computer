import "../gl-matrix.js";

var vertexShaderText = `
precision mediump float;
attribute vec2 vertPosition;
attribute vec3 vertColor;

varying vec3 fragColor;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main(){
  fragColor = vertColor;
  gl_Position = vec4(vertPosition, 0.0, 1.0);
}


`;

var fragmentShaderText = `
precision mediump float;

varying vec3 fragColor;

void main(){
  gl_FragColor = vec4(fragColor, 1.0);
}

`;

function initSpinningCube() {
  console.log("working!");
  var canvas = <HTMLCanvasElement>document.getElementById("spinning-cube");
  var gl = canvas.getContext("webgl");

  if (!gl) {
    gl = <WebGLRenderingContext>canvas.getContext("experimental-webgl");
  }
  if (!gl) {
    alert("cant run webgl noob");
  }

  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  var vertexShader = <WebGLShader>gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = <WebGLShader>gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmentShader, fragmentShaderText);

  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(
      "could not compile vertexShader",
      gl.getShaderInfoLog(vertexShader)
    );
  }
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(
      "could not compile fragmentShader",
      gl.getShaderInfoLog(fragmentShader)
    );
  }
  gl.compileShader(fragmentShader);

  var program = <WebGLProgram>gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("ERROR linking program", gl.getProgramInfoLog(program));
    return;
  }
  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
    console.error("ERROR validating program", gl.getProgramInfoLog(program));
    return;
  }

  /**
   * Create buffer
   */

  var triangleVertices = eval(`
    new Float32Array([
      // X, Y      Colors
      0.0, 0.5,    1.0, 1.0, 0.0,
      -0.5, -0.5,  0.7, 0.0, 1.0,
      0.5, -0.5,   0.0, 1.0, 1.0,
    ]);
  `);

  var triangleVertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, triangleVertices, gl.STATIC_DRAW);

  var positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
  var colorAttribLocation = gl.getAttribLocation(program, "vertColor");
  gl.vertexAttribPointer(
    positionAttribLocation,
    2,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    0
  );
  gl.vertexAttribPointer(
    colorAttribLocation,
    3,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  /**
   * Main render loop
   */

  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

export default initSpinningCube;
