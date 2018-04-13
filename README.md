# sleep-ai

- [Website](http://sleep-ai.azurewebsites.net/public/index.html)
- [Android App](https://github.com/ajeetdsouza/sleep-ai-android)
- [Music Engine](https://github.com/ajeetdsouza/sleep-ai-deepbach)

## Introduction
sleep.ai is an experience that aims to improve quality of sleep by playing soft, AI-generated classical music in the background.
We train the network on chorales written by timeless classical composers such as J.S. Bach[1], and it learns to generate infinite amounts of music that one can sit back and listen to at leisure, all from their mobile phones or personal computers.
Our model makes use of four neural networks: two Deep Recurrent Neural Networks, one summing up past information and another summing up a prediction of future inputs; together with a regular neural network for notes occurring at the same time.
One thing the neural network particularly excels at is reharmonization, wherein it takes one out of the 4 tracks of an existing chorale, and improvises, producing its own spin on the other 3 tracks.

## Why classical music?
There are many benefits one could derive from listening to classical music. From pain management to improved sleep quality, listening to classical music has both mental and physical benefits.
According to a study[2] of people with sleep issues, listening to classical music for just 45 minutes prior to bed can help improve sleep quality.
In a study, French researchers[3] found that students who listened to a lecture in which classical music was played in the background scored better on a test compared to other students. 

## Web App
The Web Application is hosted on Microsoft Azure, which it utilizes for continuous music generation in the background. It is designed in such a manner that a user is unlikely to ever hear the same track again, thus providing a seamless experience of virtually infinite music.
The backend is built on Node.js, and the frontend uses HTML5 and CSS3 to create a responsive website that looks great on devices of all sizes. 

*Unfortunately, while we initially planned to run the Music Engine continuously in the background, due to webjobs being disabled on our student accounts, we were unable to deploy this. Instead, we used some sample music tracks from the generator that we created on our own PCs.*

## Sources
- [1]arXiv:1612.01010v2 [cs.AI]
- [2][Lai, H.-L. and Good, M. (2005), Music improves sleep quality in older adults. Journal of Advanced Nursing, 49: 234–244. doi:10.1111/j.1365-2648.2004.03281.x] 
- [3]Dosseville, Fabrice & Laborde, Sylvain & Scelles, Nicolas. (2012). Music during lecture: Will students learn better?. Learning and Individual Differences. 22. 258-262. 10.1016/j.lindif.2011.10.004. 

## Contributors
- [Ajeet D'Souza](https://github.com/ajeetdsouza)
- [Arvind Suresh](https://github.com/arvind0598)
- [Arijit Ghosh Chowdhury](https://github.com/arijit1410)
