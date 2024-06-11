# Movie Time

Movie Time is an app that enables users to track movies in a watch list and mark them as done when finished. This project is designed to be scalable, maintainable, and efficient, utilizing modern web technologies to deliver a seamless user experience.

## Table of Contents

1.  **How to run the project**
    
2.  **Implemented features**
    
3.  **Technologies used**
    
4.  **Backend**
    
5.  **Future improvements**
    

## How to Run the Project

1.  git clone this repo
    
2. Ensure Docker is installed on your system. [https://docs.docker.com/engine/install/]
    
3. Configure the backend .env file with your TMDB API key and TMDB read access token. [Please take a look on example.env and make a copy with the name .env] [https://www.themoviedb.org/settings/api]
    
4. In your termnial, run inside the root directory ```docker-compose up --build``` 
- - You should find the project hosted on localhost:3000, or in the terminal, you might see another hosted link.
    

## Implemented Features

*   **User Authentication:** Secure login and registration system using JWT tokens.
    
*   **Watch List:** Users can add movies to their personalized watch list.
    
*   **Custom Hooks:** Custom React hooks.
    
*   **Custom Components:** Handcrafted UI components with no external UI library.
    
*   **Responsive Website:** Designed for seamless navigation on various devices.
    

**Technologies Used**

*   **Frontend:** React, Tailwind CSS, React Query
    
*   **Backend:** Node.js, Express.js, JWT
    
*   **Deployment:** Docker
    

**Backend**

The backend server automatically fetches data from The Movie Database (TMDb) and stores it in our database. This data is refetched every week to provide new movie suggestions. This approach reduces the API key’s rate limits, ensures consistent data delivery to the frontend, allows for faster loading of the landing page by controlling the fetched data, and prevents any impact from backend changes, such as removing The Movie Database or adding new sources. Additionally, the backend logic is isolated from the database, enabling easy manipulation of data and future deployment as independent services.

**Future Improvements**

*   List user's watch list.
    
*   Mark movies as watched.
    
*   Show what to watch next.
    
*   Enable users to share their watch lists.
