# Marvelous

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

# Getting Started with Marvelous

Welcome to Marvelous documentation. This guide will help you get started with our application, which allows you to explore characters from your favorite stories. Follow the steps below to access and interact with the portal.

## Step 1: Access the Application
You can access Marvelous in two ways:

#### Option 1: Download the Repository (Local Setup)
Clone the repository from our GitHub page: git clone https://github.com/your-username/character-portal.git

CD trought the application folder, it should be call marvelous. Then run ng-serve on your terminal, the application should start, and you will see a message indicating that it's running on a local server (usually, http://localhost:4200/).

#### Option 2: Use the Deployed Version
Alternatively, you can access the application via the deployed version at https://your-deployed-url.com.

## Step 2: Exploring Characters
Marvelous primarily focuses on characters. Here's how you can interact with it:

### Filter Characters by Alphabet
You can filter characters by their names using the alphabet filter located on the page. Simply click on a letter, and the portal will display characters whose names start with that letter.

***NOTE:*** The response from the API returns the characters filtered by the alphabet, so in order to test the filter you should change the offset of the characters api call. So go to /src/service/api.service.ts then go to line 18 and change the offset=1200 to the value you want, take in consideration that there is only 1568 characters, so offset should not be greater than 1568

### Use the Search Bar
You can search for specific characters by entering their names into the search bar at the top of the page. As you type, the page will filter and display characters that match your search query.

## Viewing Character Details
Click on a character card to view detailed information about that character. This will take you to a dedicated character detail page where you can find additional information, such as their description, comics, and series.

### 1. Character Description
In this section, you will find a basic description of the character. 

### 2. Comics Featuring the Character
Discover the comics in which the character has appeared. This section lists all the comic book issues and story arcs in which the character plays a significant role.

### 3. Series Featuring the Character
Explore the series (TV shows, animated series, or other forms of media) that feature the character. This section provides a list of series titles and brief descriptions.

### 4. Explore All Comics/Series
If you want to see a comprehensive list of all comics or series associated with the character, you can easily do so. Simply click on the "Explore all comics" or "Explore all series" button on the Character Detail page. This will take you to a dedicated page where you can browse through all the comics or series related to the character.
