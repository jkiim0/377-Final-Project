**Installation:**

Prerequities:
- Node.js
- Supabase
- TasteDive API key
- LastFM API key

1. Clone the repository - https://github.com/jkiim0/377-Final-Project.git

2. Install node npm : this will install express, supabase client, and nodemon.

3. If needed, replace supabase url and key. As well as TasteDive and LastFM API keys.

**How to Run:**

- Start the server using node or nvm start. You should now see where the server is running.

**API:**
The server is built using Node.js and Express.
- Get:
    - /api/health: used to make sure that the server is running correctly
    - /users: retrieves all users from the supabase database
- Post:
    - /user: created a new user record in the DB

*Currently no tests have been implemented

**Bugs:**
- Searches may fail if the artists name is misspelled

**Road-Map for Future Development:**
- Dedicated profiles for user authentication
- Improvement in recommedation of artist
- Add recommendation based on particular songs
- Improved responses and mobile development.