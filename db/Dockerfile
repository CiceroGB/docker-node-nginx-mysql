FROM mysql/mysql-server:8.0

CMD [ "--innodb-use-native-aio=0" ]

COPY setup.sql /docker-entrypoint-initdb.d/
