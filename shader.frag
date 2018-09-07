#version 150

uniform float time;
uniform vec2 resolution;
uniform sampler2DRect tex;

in vec2 texCoordVarying;
out vec4 outputColor;

const float PI = 3.1415926;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float b = step(gl_FragCoord.y, resolution.y * 0.5);
  vec3 color = vec3(b);

  for(float i = 0.0; i < 2.0; i += 1.0){

    vec2 t = vec2(0.75 * cos(time + i * PI), 0.75 * sin(time + i * PI));
    float v = ((b == 0.0) ? 0.075 / length(p - t) : -0.075 / length(p - t));
    color += vec3(v, v, v);
  }

  outputColor = vec4(color, 1.0);
}
