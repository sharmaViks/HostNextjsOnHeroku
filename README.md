This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

STEP 1:
Clone the repo. via command: git clone https://github.com/sharmaViks/HostNextjsOnHeroku.git

STEP 2:
Install NPM modules via command: npm install --save.

STEP 3:
Start Application via command: npm run dev

STEP 4:
Open the browser & type localhost:3000


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Project Folder Structure:

    |-pages
            |-index.js  --> This is the starting point of our application. Starting component of our application                      (LaunchProgramsContainer) is rendered here.
            |-_document.js --> This file is to specifically implement the Material UI styles on the server side.

    |-components
            |-LaunchProgramsContainer.js  --> This is the component which implements the side effects and pass the data to the child component.
            |-LaunchPrograms.js --> This is the functional component which renders the data passed to it.
            |-redux
                    |-actions.js  --> actions that we need to dispatch
                    |-reducers.js --> reducer functions
                    |-index.js  --> API calls
    |-store.js  --> It is the file that combine the reducers and create the store.
    |-theme.js  --> This theme file creates the theme object that we will apply to our application using Material UI.
    |-createBreakpoints.js --> As different screen sizes were given in the assignment so I needed to modify the Material UI pixels as per the assignment. This file contains those different screen sizes.
    |-public --> It contains the favicon for our application.
    |-README.md --> Description for our application
    |-package.json 
    |-.gitignore


## Explanation:

For my application I thought of that each component is independent of another one. For example let's say I have 2 components one is the Login and another is the landing Page  and If I delete Login then It shouldn't impact the Landing Page component. SO I have used redux folder specifically for each component & each component has its own state which will remain unimpacted by other component.

I have created the filters Static as an array of Object having Type,Title,Value and Filter Color.

There is just one Component over which we can loop for Filters and Programs.

## External Libraries Used:

1.) Material UI --> I have used this designing library to design my application as it provides prebuild modules that are easy to use and implement.
2.) React-redux --> To maintain the application state I have used the react redux. State management is made easy with the help of this library.
3.) Reduxsauce --> This library provides the concise methods for creating actions and reducers for my application.
4.) Redux-thunk --> This is the middleware that I have used to implement asynchronous redux actions.

## Issues Faced:

    ## Folder Structure ISSUE:
1.) It was the very first time I was implementing the SSR. I have Gooogled the SSR implementation in React JS and there were just normal tutorials. But then I get to know about NextJS and I used this framework and implemented it step by step. There were multiples issues initially while using this framework . Like:

1.) How to manage folder structure.
2.) How to use material UI styles.
3.) Breaking Points that I need to implement according to the requirements in the assignment.(i.e. width as per screen size)

    ## Styling ISSUE:
2.) The major issue that I tried but wasn't able to implement due to shortage of time was using react-window module.
As the API provided in the assignment fetches 100 data at a time and I am rendering all the data at a time , In case I will be having 1000 of data then it will impact the UI. So I googled how to render the large amount of data in chunks and get to know about react-window concept. As I have Grid like structure , VariableSizeGrid is available in react-window that can be used. But I was unable to implement it as there were issues like firstly convert 1-D array to 2-D and then specify width as per screensize. So this one I wasn't able to implement.

3.) LightHouse helped me alot to know about SEO features that I implemented after checking the output in LightHouse.

        ## Deployment & Hosting ISSUE:
4.) Deployment and Hosting was another the major issue that I have faced. I was trying to host it over Firebase but there were issues of firebase-admin and no answers were available over stackoverflow. So I moved to Heroku as I have used it earlier once and its easy to use. Firebase was also increasing the build size. With Firebase build size was approx. 95 Kb . without that its  59.4 Kb

    ## Coding ISSUE:
5.) While changing the button color over click was a issue that I faced Then I used the array for the color and updated the value according to the requirement.

6.) The images that are coming from the server are just png images . WebP images are better to render. So images from the server should be in that format for better performance.

## LightHouse Report

I have added the images as well as Pdf of the Lighthouse performance report for Mobile and Desktop.


