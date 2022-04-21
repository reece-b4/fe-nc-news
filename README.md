<h1 align="center">Welcome to Reece Balfour's Northcoders News 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/northcoders/be-nc-news#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

The frontend of nc_news API; a single page react mobile first website with the following features (logged in user is fixed as jessjelly): 

Users can view a list of all articles. <br>
Users can filter articles by topic. <br>
Users can sort articles by: date, user, votes, title, comment count. Either ascending or descending (defaults to descending). <br>
Users can view an individual article. <br>
Users can vote once up or down per articles. <br>
Users can view a list of comments associated with an article. <br>
Users can post a new comments to an existing article. <br>
Users can delete their own comments. <br>
Users can expand comments cards to see more information. <br>

Unique errors and popups appear when a user:  <br>
Tries to vote more than once for an article. (handled in f-end) <br>
Tries to post an empty comment. (handled in f-end) <br>
Navigates to a non existent path. (error comes from b-end) <br>
Navigates to a non existent topic. (error comes from b-end) <br>
Navigates to a non existent article. (error comes from b-end) <br>
Deletes a comment.


Consideration for different screen sizes has been made with the use of media queries and flexbox.  <br>
Consideration for accessibilty has been made through the use of correct labeling and handling of events. <br>
Consideration for UX has been made through the use of loading display, simple design and feedback on errors and events.


<br>
Minimum version of Node: v16.13.2 <br>
Minimum version of React: 17.0.2 <P>

### 🏠 [Homepage](https://reecebalfourncnews.netlify.app)
### 🖥️ [Git Repo](https://github.com/reece-b4/fe-nc-news)

### 🏠 [Back-end Homepage](https://reece-ncnews.herokuapp.com)
### 🖥️ [Back-end Repo](https://github.com/reece-b4/NC-News-public) 
 <br>

## Cloning repo (link above)

Copy code url from github <br>
In required directory:
```sh
 git clone <url>
```

## Install Dependencies
```sh
npm install
```

## Author

👤 **ReeceBalfour**

* Github: [@reece-b4](https://github.com/reece-b4)
