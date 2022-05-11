#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    float Luminance = 0.299*FragColor.x + 0.587*FragColor.y + 0.114*FragColor.z; 
    FragColor= vec4(Luminance,Lumimnance,Luminance,1);
}
