# [Dissonance](https://www.dissonance-fs.herokuapp.com)

Dissonance is a texting platform where users can communicate with others and create their own communities. Users are able to create an account, create servers and channels, as well as join existing servers that they are not a part of. They can also edit exisiting servers and channels that they have created.


# Servers and Channels
* Users are able to create, delete and edit servers that they are the owner of 
* Users that are part of a server can create new text channels 
* Users can explore and join other servers that they are not a part of 

# Challenges
* Displaying servers that a user was not currently a member of. My solution was to create an unjoined object which contained an array of servers where there was no association between the user and server, then 
![alt text]() 

* Populating every new server with a general channel and then displaying channels belonging to a server once a user had joined 

# Technologies Used
* Ruby 2.7.3
* Rails 6.1.4.1
* Node v14.15.1
* PostgreSQL 10.17 
* Action Cable
* WebSockets
* HTML
* SCSS

# Future Plans
* Add messages to channels with real time rendering 
* Add direct messages between users
* Add members sidebar to channels



