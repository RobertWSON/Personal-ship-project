# Personal-ship-project


- **Description:**
  This repository hosts a React-based cruise ship website, designed to let users review cruise ships.
  Users can:
  - Read existing reviews
  - Write their own reviews
  - Navigate to booking pages for specific ships.

  Additionally, the site explores history of cruise shipping, offering:
  - A classic ship experience
  - Ship plans


- **Features:**
  - Dynamic front-end developed with React.js, offering user-friendly interactions.
  - Restful APIs to enable efficient data exchange between front-end and back-end.
  - SQLite3 for efficient database management of reviews and ship details.
  - knex.js for handling database migrations, rollbacks and seed data management.


- **Technologies:**
  - Front-end: React.js components, HTML, CSS and APIs
  - Back-end: Node.js, Express.js and SQLite3
  - Build Tools: Webpack, Yarn and Knex
  - Utilities: Superagent

- **Front-end operations:** This is a description of front-end functionality :
  - Client folder
    - Contains a components folder for React `.jsx` component files, which are central to front-end functionality.
    - Includes an API folder for APIs, which utilize Superagent to make GET requests through exported functions that 
      connect front-end to back-end. 

  - Public folder  
    - Maintains CSS files that define main style and individual page layouts for application.
    - Stores images and videos that are displayed on web pages.
    - Uses index.html file, which serves as an entry point and controls base HTML structure for React application.

- **Back-end operations:** This is a brief description of back-end functionality :
  - Server folder
    - Manages database, routes and server connections.

  - Seeds folder
    - Stores database data details.

  - Migrations folder
    - Manages data types related to seed data.    


- **Setup Instructions**  
  1. Clone Personal-ship-project repository:

     `git clone https://github.com/RobertWSON/personal-ship-project.git`


  2. Navigate to project folder:

     Open your command line (e.g. Bash or ZSH) or terminal and type:   

     `cd project_name`    (where `project_name` is `Personal-ship-project`)  

     - Note: If you use a workspace for your web development, navigate to it :
     
       `cd workspace/personal-ship-project`


  3. Install any needed dependencies

     This React project uses Yarn as its package manager. 
     To ensure all dependencies preconfigured in boilerplate are installed, navigate to project folder and run:

     `yarn install`

     This command reads package.json and yarn.lock files in project directory to install all required dependencies.

     If you have not used Yarn before, make sure it is installed on your system. 
     For setup instructions, visit Yarn Documentation https://yarnpkg.com/getting-started/install.

     Note: Yarn may be pre-installed in some environments. To check, run:

     `yarn --version`

     Note: This project was initially setup with Yarn v1.9.4.  
           If you are using Yarn v3 or newer through Corepack, the project should normally work without a problem.
           This is because `yarn.lock` file allows consistent dependency management, locking all required versions,
           while supporting compatibility for modern systems.

     If you find a rare issue with newer Yarn versions (potentially due to your operating system), you 
     can switch back to Yarn v1 (Classic) with:

     `yarn set version classic`

     This ensures a smooth setup regardless of your current Yarn version.

     To add a single dependency to project, use:

     `yarn add react`

     Note: To check if a dependency already exists, look in package.json file. 

     To install multiple dependencies at same time, separate them with a space:

     `yarn add react-router-dom react-router-hash-link react-slick`     


  4. Running React project:
     
     To run React ship project in development mode on your local server, type:

     `yarn dev`

     Once server is running, open your browser and type:     

     `http://localhost:3000`

     This URL serves as an entry point for this React application, displaying home page and
     allowing access to application.  


  5. Testing API Endpoints (Highly recommended):

     Before testing, ensure you have development server running in command line or terminal by typing:

     `yarn dev` 

     Use a program such as Postman to check that back-end functionality works correctly.

     Example for testing `/v1/cruiselines` API:   

     - Request in Postman:
     
       - Method: GET
       - Type URL: `http://localhost:3000/v1/cruiselines`
         or you can copy `/v1/cruiselines` from API and paste it at end of `http://localhost:3000`

       - Expected Postman Response  
       
         Note: This shows an array with JSON output

         `[` 
            `{"cruise_line": "Carnival"},`
            `{"cruise_line": "Celestyal Cruises"}`
          `]`
     
     - Command Line (console) Server Output  

       Now that a request is running in Postman and yarn dev in command line or terminal, lets look at output 
       from this.
       Output logs back-end actions in this format:

       `server/db/dbcruises.js getCruiseLines called!`   
       `dbcruises.js - GOT CRUISE LINES: [ { cruise_line: 'Carnival' }, { cruise_line: 'Celestyal Cruises' } ]`

       - This output shows that getCruiseLines function was successfully called.

       - The function retrieves cruise line data from a database and returns an array of objects in JSON format,
         where each object represents a cruise line with its details.   
       
       - JSON Output from yarn dev

         `[ { cruise_line: 'Carnival' }, { cruise_line: 'Celestyal Cruises' } ]` 


- **Future Enhancements**

  This section focuses on changes that improve current repository for better functionality and usability.

  - Expand review form
    Add additional fields to review form (e.g., ratings and comments) to provide users with an improved experience.

  - Add user authentication
    Implement user authentication for securely submitting and managing reviews.

  - Refine component structure
    Improve component organisation to enhance following:

    `Scalability:` 
    - Reduce number of components with overlapping functionality, to minimize redundancy and promote reusability. 
      For example components handling classic ship data (e.g., Evolution Part 1 and 2 pages) could be unified  
      (brought together through props) into a single reusable component.

    - Adding new cruise or classic ship data is straightforward, as all fields are set and designed to accommodate 
      various types of data. 

    - Support handling large datasets, through using Git Large File Storage (LFS). 
      Note: GIT LFS is required for this project due to dataset size.
      Visit https://git-lfs.com/ for setup instructions.

    `Maintainability:` 
    - Future updates to ships (e.g. name or ownership changes) can be made more efficient with an adaptive seeding and 
      migration process, that integrates external data (e.g., API's or files). 

    - Cruise ship reviews may require frequent maintenance, while classic ships will need minimal updates, once data 
      is fully added.   


- **Repository Goals**  

  This section outlines broader plans for transitioning and evolving this React project with TypeScript. 

  - Complete current repository
    Ensure current repository reaches its full potential by finalizing reviews, authentication, responsiveness
    and all data updates.

  - Explore rebuilding project with TypeSsript      
    Plan to migrate project to TypeScript in a new repository to leverage modern React development practices.
    This ensures project's longevity and compatibility with evolving technologies.

    - Migration Plan:
      If you create a new repository for TypeScript version, most of the code can be reused from current repository.
      You will need to do the following to make it work:

      1. Install TypeScript as a dependency.
         
         `yarn add typescript --dev`

         Note: As React project originally used yarn, it must be needed for installation.
               A specific version can be installed using @ symbol, shown below:  
               
         `yarn add typescript@4.7.4 --dev`

         This installs TypeScript version `4.7.4`.

         If you want to use the latest version in a particular range, you can specify a range like 
         `typescript@^4.7`.

         Configure TypeScript in project.

         `npx tsc --init`

         This command creates a tsconfig.json file configuration for managing TypeScript settings.

      2. Migrate current React project into this new repository by either:
         - `Copying necessary files:`
           An alternative for users who prefer to start fresh without Git history or only need specific files from 
           old repository.

         - `Cloning old repository:`
           This is most efficient method, as it brings all files, folder structure and commit history in one step to this new repository.  

           Within cloned repository, start fresh by removing old Git history, through detaching Git:

           `rm -rf .git`

           For more details on Git history, see this Stack Overflow answer
           https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github?  

           Initialize this new repository with Git

           `git init`

      3. Gradually convert JavaScript files to TypeScript (`.ts` and `.tsx`) to allow for type safety.
            Note: Focus on key components first, such as reusable and critical parts of the application.

      4. Update dependencies and configuration files to support TypeScript.
            Note: For example ensure @type packages for libraries used in project are installed and check for
                  any conflicts on tsconfig.json.   

      5. Test all functionality to confirm compatibility and ensure project runs smoothly without problems.

      6. Push completed TypeScript project to a new GitHub repository.