# Populix Poplite Service

Poplite services using GraphQL (external) and REST API (internal)

## Recipe

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Create `.env` file in the root folder, and add this line

```
# GENERAL
NODE_ENV=development
APP_PORT=3000

# POSTGRESQL
DATABASE_HOST="poplite-db"
DATABASE_PORT="5432"
DATABASE_NAME="poplite"
DATABASE_USER="local-poplite"
DATABASE_PASSWORD="p@55w0rd"

# ELASTIC APM
ELASTIC_APM_SERVICE_NAME=poplite-service
ELASTIC_APM_SECRET_TOKEN=
ELASTIC_APM_SERVER_URL= http://apmserver:8200
```

<br/><br/>
Start application by running command

```
  docker-compose up
```

Your application should be running on `http://localhost:3000`

See Documentation by accessing
`http://localhost:3000/docs`
<br/><br/>

# Port Allocation

API Port

```
localhost:3000
```

Documentation

```
localhost:8080
```

PostgreSQL

```
localhost:5432
```

Kibana

```
localhost:5601
```

<br/><br/><br/>
