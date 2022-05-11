#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 inverted =vec2(1.0-texcoord.x,1.0-texcoord.y);
    FragColor = texture(image, inverted); 
    FragColor = vec4(1.0-FragColor.x, 1.0-FragColor.y, 1.0-FragColor.z,1);
}
