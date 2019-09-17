# IntekWeatherApp


## Mission

You have to develop a React Native app that will work in both iOS and Android platforms. For convenience we are only going to test the app in iOS iphone simulator. Your app will query a local json file and call a third party API to fetch the data and display in the app.


## Open Weather Map API

We are going to be using a third party API to get the required data. It requires you to create an account in them and subscribe you to their api. Follow the link below to register an account.

https://openweathermap.org

Once you are registered you need to subscribe to Current Weather data API in the following link

https://openweathermap.org/api

You would have to read the API docs for the specific api. The following link helps you to understand API more

https://openweathermap.org/current


## Prerequisite

We assume that you have react native installed in your PC's. But for students whose PC doesn't have react native. You need to follow the procedures step by step to get react installed.

https://www.npmjs.com/package/react-native

https://facebook.github.io/react-native/docs/getting-started


## ReactNative

React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It’s based on React, Facebook’s JavaScript library, but instead of targeting the browser, it targets mobile platforms. 

You can learn more about ReactNative by reading and understanding the official docs

https://facebook.github.io/react-native/


## Practicing with ReactNative

You can practice your ReactNative code using an online code editor. The following code editors are popular with developers and you may use them to practice your react native code.

https://codesandbox.io/s/q4qymyp2l6

https://codepen.io/necolas/pen/PZzwBR


## The App

The Following is the screenshot of the app.

![Screen_Shot_2019-03-11_at_4.36.29_PM.png]()


## Waypoint 1: Create a skeleton React Native app

Create a basic React Native app that displays a text or an image.


## Waypoint 2: Parse JSON file

Fetch information from parsed data


##Waypoint 3: Create and Load Picker Component

Create a picker component in your app. More information on pickers can be found here.

https://facebook.github.io/react-native/docs/picker

Once you create a picker component, load the parsed JSON data value city into pickers. Remember only load the JSON value of city into picker.


## Waypoint 4: Create textinput Component

Create a textinput component above the picker component. More information on textinput component can be found here.

https://facebook.github.io/react-native/docs/textinput

When a text value is entered in textinput it will show the corresponding value in picker. In a way textinput and picker are synchronized.

![Screen_Shot_2019-03-11_at_4.59.22_PM.png]()


## Waypoint 5: Fetch API data

When a valid textinput is entered or when a picker value is selected we fetch the API data of the selected city from Open Weather Map API.


## Waypoint 6: Display the weather data

Display the data of the fetched API from Open Weather and stylize a component with images for each weather conditions to display interactive weather data.

![Screen_Shot_2019-03-11_at_5.15.10_PM.png]()


## Local JSON File

For this project you will be working with JSON file that will has all the cities in Vietnam.


## Bonus:

## Facebook Login

We will be using react-native-fbsdk to integrate facebook login to work with our app. The following is the documentation on how to install and use it .

https://github.com/facebook/react-native-fbsdk

Note that installing a wrapper doesn't always work directly. You would have to search for and find the best possible solutions to make it work.

![Screen_Shot_2019-03-11_at_5.22.36_PM.json]()
