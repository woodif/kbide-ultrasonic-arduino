# Ultrasonic HC-SR04 library for KB-IDE

# โมดูล Ultrasonic คืออะไร
โมดูลอัลตราโซนิค (Ultrasonic  Sensor) คือโมดูลที่ใช้คลื่นเสียงความถี่ในการส่ง และรับเพื่อระบุตำแหน่งระยะห่างของวัตถุนั้น ๆ  โดยตัวส่งจะสร้างคลื่นเสียงออกไป และเมื่อคลื่นกระทบวัตถุ จะถูกสะท้อนมาให้กับตัวรับเพื่อนำไปประมวลผล ซึ่งในการทดลองนี้จะเลือกใช้โมดูล HC-SR04

# หลักการทำงานของ Ultrasonic
โมดูล HC-SR04  วัดระยะห่างด้วยคลื่นอัลตราโซนิค  (คลื่นเสียงความถี่ประมาณ 40 kHz)  โดยคลื่นที่ส่งออกไปจะเป็นรูปบีม (Beam Angle) หรือคล้าย ๆ กับแสงจากไฟฉายเมื่อเราเปิดในที่มือนั่นเอง

![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/ultrasonic_range.png)
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/ultrasonic_detecting.png)
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/ultrasonic_range_finder.png)

โดยโมดูล HC-SR04 มีขา TRIG (ตัวส่ง) และ ECHO (ตัวรับ)  เพื่อส่งคลื่นอัลตราโซนิคในการวัดแต่ละครั้ง จะต้องสร้างสัญญาณพัลส์ (Pulse width) ที่มีความกว้างอย่างน้อย 10 ไมโครวินาที (10 microssecond) ป้อนเข้าขา Trig และวัดความกว้างของสัญญาณพัลส์ช่วงที่เป็น High จากขา Echo ประมาณ 150 ไมโครวินาที ถึง 25 มิลลิวินาที (150 microsecond – 25 milliseconds)

![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/ultrasonic_transducer.png)
(cc. picture form arcbotics.com )

# การคำนวณระยะทาง
การเขียนโค้ดใน foldet src/Ultrasonic.cpp จะเป็นการส่งสัญญาณพัลล์เอง จากตารางการส่งข้อมูลด้านบนจะเห็นได้ว่า จะต้องส่งพัลส์ลอจิก High ความกว้างอย่างน้อย 10 microsecond ออกไปที่ขา TRIG จากนั้นทำการวัดความกว้างของสัญญาณพัลส์ที่สะท้อนกลับมายังจา Echo โดยใช้คำสั่ง pulseIn() ได้เลย จากนั้นนำค่าที่ได้มาคำนวนหาระยะทาง ซึ่งความเร็วเสียงที่อุณหภูมิปกติ () จะได้ประมาณ 340 m/s ดังนั้นจึงสามารถหาระยะทางได้จากสมการ S = Vt  หรือ ระยะทาง = (ระยะเวลาที่วัดได้ / 2) / 29.1 ก็จะได้ระยะทางที่มีหน่วยเป็นเซนติเมตร

![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/src_cpp.JPG)

# ตัวอย่างการต่อวงจรร่วมกับบอร์ด KidBright
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/kidbright_ultrasonic.png)

# ตัวอย่างการต่อบล็อกในโปรแกรม KB-IDE 
บล็อกตั้งค่าขาใช้งาน จากตัวอย่าง 18 คือ ECHO และ 19 คือ TRIG
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/ultrasonic_setupBlock.JPG)

บล็อกอ่านข้อมูลจากเซ็นเซอร์ Ultrasonic
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/ultrasonic_getDataBlock.JPG)

ตัวอย่างบล็อกแสดงผลผ่านทาง Serial monitor
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/serial_monitor.JPG)

ตัวอย่างบล็อกแสดงผลผ่านทาง Serial graph
![image](https://raw.githubusercontent.com/bavensky/kbide_plugin_template/master/static/serial_graph.JPG)