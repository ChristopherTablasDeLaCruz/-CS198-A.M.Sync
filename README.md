# -CS198-A.M.Sync

Project Name: A.M. Sync

Team Members: Christopher Tablas De La Cruz, Clarissa Hardjono

Description:
A.M. Sync is a web app built to streamline your morning routine by combining your mood, the weather, and your personal style — all in one place. Instead of checking multiple apps for weather, music, and outfit ideas as you are getting ready in the morning, users simply select their mood and let the app do the rest.
With just a few clicks, A.M. Sync delivers:

- A Spotify playlist matched to your mood and current weather

- The local weather forecast pulled in real-time

- A personalized outfit suggestion based on both the weather and your style preferences

Users can select their preferred outfit styles (e.g., comfy, trendy, sporty, feminine, minimal, etc.) during onboarding, and the app will tailor daily outfit suggestions accordingly. Whether you're heading out into the sunshine or bundling up for a rainy day, A.M. Sync helps you start your day with confidence and the perfect vibe.

Features + Tools/Technologies:
1. Mood Selection: User clicks an emoji or button to set their current mood (Happy, Chill, Sad, or Stressed).

    Tools:

- HTML for mood buttons

- CSS to style the buttons

- JavaScript to store the selected mood in a variable


2. Weather Data: Fetches and displays the user’s current weather using their location.

    Tools:

- OpenWeatherMap API 

- Geolocation API 

- JavaScript for API call and displaying the weather

3. Spotify Playlist Recommendation: Based on the selected mood and weather condition, the app embeds a pre-curated Spotify playlist using mood keywords.
(Manually choose a few public playlists for each mood and weather combo and embed them using Spotify’s Embed Player)

    Tools:

  - HTML <iframe> for Spotify embeds

  - JavaScript to show the right embed based on mood and weather

4. Personalized Outfit Suggestion: Shows a simple outfit suggestion based on weather and user’s chosen style preference. Users pick their style when they first open the app. (Use a basic HTML dropdown or buttons to let the user pick their style once. Store their choice in localStorage, then use simple logic to recommend outfits (e.g. “Rainy + Trendy → trench coat & boots”)).

  Tools:

- HTML/CSS for outfit display

- JavaScript + localStorage to store preferences

- Hardcoded outfit rules as if statements

5. UI

  Tools:

- HTML/CSS

- Media Queries

- Google Fonts + icons or emojis for visual design

Figma Link: https://www.figma.com/proto/tgKluuKcQeFCu7t90dqA1n/-CS198--A.M.-Sync-Final-Project?node-id=0-1&t=mMYvNQeimOADLiCh-1

Timeline:

April 22: Finalize project proposal and design layout 

April 25:Build mood selection and show weather using OpenWeatherMap API

April 28: Add Spotify playlist and outfit suggestions based on mood and weather

May 1: Make the app responsive and improve the design

May 2: Test everything, prepare presentation, and submit project

We will meet in-person and talk virtually throughout the project and meet in person to finalize the project.
