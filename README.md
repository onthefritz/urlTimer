# URL Timer
This is a basic HTML page that can be used as a timer in applications that accept some sort of browser source. 

Inital creation reason was for working with OBS Studio.

## How to use
I will be explaining how to use this in OBS Studio. 

You can either clone this repo somewhere on or machine or download the zip file included in the repo. Once you have the files put them somewhere you can rememeber. You will need the following files for this to work:

1. timer.html
2. jquery-3.6.0.min.js
3. timer.js
4. sound.mp3

Make sure they are all in the same folder (ie urlTime/\*files\*).

Now for the setup within OBS. From my experience I would recommened using a new Scene to store all the timers you want and then adding that scene to other scenes to use them. Controlling them with outside sources such as a Stream Deck or Lioran board will be easier.

1. Create a new Scene. I named mine Timers.
2. Open up the "timer.html" file that you downloaded and copy the URL.
3. Add a browser source. For this example name it 10 Minute Timer.
4. \*DO NOT USE A LOCAL FILE\* You will not be able to use this if you do. 
5. Paste the URL and add "?timeInMilliseconds=600000" to the end of the URL.
6. Check "Shutdown source when not visible" because that will make the timer run when it is visible. 
7. In the Properties for the source I would recommened 2 things. 
    
    1. Add "color: white;" to the custom CSS. This will make the text white. You can change it to whatever color you want but I have darker backgrounds so do whatever is best for your. 
    2. If you have a particular font you use or want to see add "font-family: 'font name';" This will change the font of the text to that font family.

8. Include the Timers scene in your other scenes and your good to go. You can click the eye symbol next to the source and it should start the timer.

NOTE! If you are using some piece of software that can control visibility to sources within OBS you can use those to control the timers. 

Don't like the alarm sound that goes off after the timer is up? No worries! You can create your own sound and add it to the same location as the other files. Just one *VERY* important note, it needs to be named "sound.mp3" which means it has to be an mp3 file and be named sound. 

Don't want a sound? No worries. Just delete the sound.mp3 and you're good to go. 