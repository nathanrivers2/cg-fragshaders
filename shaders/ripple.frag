#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 tempCoord = vec2(((texcoord.x*2.0)-1.0), ((texcoord.y*2.0)-1.0)); 
    float radius = length(tempCoord); 
    vec2 offest = tempCoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 intermediate = tempCoord + offest;
    vec2 final = vec2((intermediate.x+1.0)*0.5,(intermediate.y+1.0)*0.5);
    FragColor = texture(image, final);
}
