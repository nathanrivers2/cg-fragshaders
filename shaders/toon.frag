#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    float r = (round(FragColor.x*4.0))/4.0; 
    float g = (round(FragColor.y*4.0))/4.0;
    float b = (round(FragColor.z*4.0))/4.0;
    FragColor = vec4(r,g,b,1.0);
}
