FROM node:14

# Add wait-for-it
COPY ./wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh
ENTRYPOINT ["/bin/sh","-c","/app/wait-for-it.sh db:3306 -t 30 -- npm start"]
