# Exam-App
Basis App für Exam WTAT1 PZ1.
## Clonen der App und Abgabe:

- Repo auf Gitlab im HRZ anlegen:

    - [https://gitlab.rz.htw-berlin.de/](https://gitlab.rz.htw-berlin.de/)
    - Oben rechts: "New project" mit exakt diesem Namen anlegen:
    - Name: wtat1-exam-sose2020-pz1
    - Visibility Level auf "Private" lassen
    - Create project
    - Settings->Members nach meinem Namen suchen (kleinen/@kleinen)
    - Choose a role permission: Maintainer
    - Invite


- Exam App clonen und pushen (in geeignetem Ordner)

    - git clone https://github.com/htw-imi-wtat1/exam-app.git
    - cd exam-app
    - das gitlab repo als remote hinzufügen:
        - git remote add gitlab https://gitlab.rz.htw-berlin.de/s0xxxxxx/wtat1-exam-sose2020-pz1 
        - z.B. git remote add gitlab https://gitlab.rz.htw-berlin.de/kleinen/wtat1-exam-sose2020-pz1
    - die Abgabe üben:
        - git tag exam-pz1-anfang
        - git push gitlab exam-pz1-anfang
     
Sie können beliebig viele commits machen. Die Abgabe erfolgt über den Tag "exam-pz1-abgabe" im master branch:  

### Abgeben: 

    - git add .
    - git commit -m "done"
    - git tag exam-pz1-abgabe
    - git push gitlab exam-pz1-abgabe
    
Falls Sie versehentlich die falsche Version bzw. commit getaggt haben, können Sie den Tag lokal löschen mit
  
    - git tag -d exam-pz1-abgabe

Und, falls Sie den Tag schon gepusht haben, auf dem repository entweder über das web-interface oder von der Kommandozeile mit

    - git push --delete gitlab exam-pz1-abgabe
    
Am Besten warten Sie nach der Klausur noch kurz im Zoom bis ich überprüft habe,
ob ich alle bzw. Ihr Repository laden konnte.

## Express App & Backend

Das Repo enthält eine Express-Backend-App, die aus den beiden Beispiel-Apps aus dem Semester zusammengesetzt ist.
Sie brauchen eine Mongo-DB die auf dem üblichen Port erreichbar ist, wahrscheinlich funktioniert einfach
die, die Sie ohnehin haben. Alternativ können Sie einen Docker-Container mit mongodb starten: `docker-compose up -d mongodb`
     
Sie finden die express app in express-backend, starten mit 

### `yarn server`

Der Server wird auf port 3001 (siehe [express-backend/config.js](express-backend/config.js)) 
gestartet, kann also erreicht werden über 

### `http://localhost:3001/`

Für alle Express-Aufgaben können Sie direkt damit arbeiten.

# React

Für React-Aufgaben verwenden Sie die von create-react-app generierte app.

## Accessing the Backend via port 3000 / the frontend

Für den React-Teil starten sie die React App wie unten beschrieben und können
diese über Port 3000 erreichen.

Um über den in package.json definierten proxy auf das Backend zugreifen zu können, müssen Sie wie beschrieben in  
https://github.com/htw-imi-wtat1/pluspoll/blob/master/doc/app-creation.md#api-calls-connecting-the-backend

den Header "Accept: application/json" mitschicken, z.B. mit curl:

    curl -i -H "Accept: application/json" http://localhost:3000/api/todos

bzw. wie im JavaScript-Beispiel 
in Zeile 13 in:

https://github.com/htw-imi-wtat1/pluspoll/blob/master/src/components/ping.js

    fetch('/api/ping',{headers: {accept: 'application/json'}})
    
## Readme der Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

