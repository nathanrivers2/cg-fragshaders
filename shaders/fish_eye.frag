#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 tempCoord = vec2(((texcoord.x*2.0)-1.0), ((texcoord.y*2.0)-1.0)); 

    float theta = atan(tempCoord.y, tempCoord.x); 
    float radius = pow(length(tempCoord), 1.5);  
    vec2 intermediate = vec2(radius * cos(theta), radius * sin(theta));
    vec2 final = vec2((intermediate.x+1.0)*0.5,(intermediate.y+1.0)*0.5);

    FragColor = texture(image, final);
}
