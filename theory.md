<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">
<h2>Introduction</h2>


A comparator as its name implies, compares a signal voltage on one input of an op-amp with a known voltage called a reference voltage on the other input. Comparators are used in circuits such as digital interfacing, schmitt trigger, discriminator voltage level detector and oscillators. A comparator circuit is basically an operational amplifier without feedback, that is, the op-amp is used in its open-loop configuration, and when the input voltage, V<sub>in</sub> exceeds a preset reference voltage, V<sub>ref</sub>, the output changes state. Due to the very high open-loop gain of the operational amplifier, using it with positive feedback or even with no feedback at all causes the output to saturate to its supply rail producing one of two distinct output voltages depending on the relative values of its two inputs.<br>

### Non-Inverting Comparator

A fixed reference voltage V<sub>ref</sub> of 1 V is applied to the inverting input and time varying signal voltage V<sub>in</sub> is applied to the non-inverting input as shown in figure 1. When V<sub>in</sub> is less than V<sub>ref</sub> the output voltage V<sub>0</sub> = –V<sub>sat</sub>, and when V<sub>in</sub> is greater than V<sub>ref</sub>, then V<sub>0</sub> = +V<sub>sat</sub>.   Thus the V<sub>0</sub> changes from one saturation level to another.<br>
<center><img src="images/Picture1.jpg" style=" height: 180px" align="center"></center><br>
<center><b>Fig 1: Non-Inverting Comparator</b></center><br>
The diodes D<sub>1</sub> and D<sub>2</sub> protect the op-amp from damage due to the excessive input voltage V<sub>in</sub>. Because of these diodes, the difference input voltage V<sub>id</sub> of the op-amp diodes are called clamp diodes. The resistance R in series with V<sub>in</sub> is used to limit the current through D<sub>1</sub> and D<sub>2</sub>. To reduce offset problems, a resistance R<sub>comp</sub> = R is connected between the inverting input and V<sub>ref</sub>. The input and output waveforms are given figure 2.<br><br>
<b>Input and Output Waveforms</b><br><br>
<center><img src="images/Picture2.jpg" style=" height: 350px; width:340px" align="center"></center><br>
<center><b>Fig 2: Input and Output Waveforms of Non-Inverting Comparator</b></center>

### Inverting Comparator

An inverting comparator in which the reference voltage V<sub>ref</sub> is applied to the non-inverting input and V<sub>in</sub> is applied to the inverting input as shown in figure 3. In this circuit V<sub>ref</sub> is obtained by using a10K potentiometer that forms a voltage divider with DC supply of +V<sub>cc</sub> and the wiper connected to the input. As the wiper is moved towards +V<sub>cc</sub>, V<sub>ref</sub> becomes more positive. Thus a V<sub>ref</sub> of a desired amplitude and polarity can be obtained by simply adjusting the 10K potentiometer.<br>
<center><img src="images/Picture3.jpg" style=" height: 180px" align="center"></center><br>
<center><b>Fig 3: Inverting Comparator</b></center><br>
The input and output waveforms of an inverting comparator are shown in figure 4.<br><br>
<b>Input and Output Waveforms</b><br><br>
<center><img src="images/Picture4.jpg" style=" height: 350px; width:340px" align="center"></center><br>
<center><b>Fig 4: Input and Output Waveforms of Inverting Comparator</b></center><br>

### Applications of Comparators

#### 1) Null detectors

A null detector identifies when a given value is zero. Comparators are ideal for null detection comparison measurements, since they are equivalent to a very high gain amplifier with well-balanced inputs and controlled output limits. The null detector circuit compares two input voltages: an unknown voltage and a reference voltage, usually referred to as v<sub>u</sub> and v<sub>r</sub>.

#### 2) Zero-crossing detectors

For this type of detector, a comparator detects each time an ac pulse changes polarity. The output of the comparator changes state each time the pulse changes its polarity, that is the output is HI (high) for a positive pulse and LO (low) for a negative pulse squares the input signal.

#### 3) Relaxation oscillator

A comparator can be used to build a relaxation oscillator. It uses both positive and negative feedback. The positive feedback is a Schmitt trigger configuration. Alone, the trigger is a bistable multivibrator. However, the slow negative feedback added to the trigger by the RC circuit causes the circuit to oscillate automatically. That is, the addition of the RC circuit turns the hysteretic bistable multivibrator into an astable multivibrator.

#### 4) Window detectors

Comparators can also be used as window detectors. In a window detector, a comparator is used to compare two voltages and determine whether a given input voltage is under voltage or over voltage.
