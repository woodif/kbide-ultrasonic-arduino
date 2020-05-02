#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Ultrasonic.h>

ULTRASONIC ultrasonic1;



void setup()
{
  
  Serial.begin(115200);
  ultrasonic1.begin(18, 19);
}
void loop()
{
  Serial.println(((uint8_t)ultrasonic1.read_distance_cm()));
  delay(1000);
}
