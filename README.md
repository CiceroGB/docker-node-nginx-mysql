# docker-node-nginx-mysql

The challenge is that when a user accesses nginx, it will make a call to our Node.js application. This application, in turn, will add a record to our MySQL database, registering a name in the people table.

The response from the Node.js application to nginx should be:

"< h1 >Full Cycle Rocks!< /h1 >"

List of names registered in the database.
Generate the docker-compose file in a way that we just need to run: docker-compose up -d and everything should be up and running, available on port 8080.

Upload everything to a repository and make the delivery.

The programming language for this challenge is Node/JavaScript.

### to run docker
```bash
docker-compose up -d --build       
docker-compose down  
