# Queue Api

### Restfull API for ticket queue management system

<br/>

### This api uses socket-io for real-time call management, using priority level criteria. The routes have been structured to allow viewing of the ticket called and the last calls

<br/>
<br/>

## Installation:

<br/>

<h3>Clone the repository: </h3>

```
git clone https://github.com/roberto-pg/queue-back.git queue
```

```
cd queue
```

```
npm install
```

```
touch .env
```

</br>

<h3>Enter static values into the .env file:</h3>

```
# Node js application port
PORT=<choose a port>

# Prisma URL
DATABASE_URL="postgresql://<username>:<password>@<container_name>:5432/<database_name>?schema=public"

# Postgres environment variables
DB_PASS_ROOT=<root password for bitnami postgres container>
DB_NAME=<database_name>
DB_USER=<username>
DB_PASS=<password>
```

<br/>
<br/>
<br/>

## Create Docker Containers:

<br/>
<h3>Run the command at the root of the project:</h3>

```
docker-compose up -d
```

<br/>
<br/>

<br/>
<h3>If all goes well, there are now four docker containers running.</h3>
<h3>To verify, type in the terminal: </h3>

```
docker ps -a
```

<br/>
<h3>To run the migrations the easiest way is to enter the node container:</h3>

```
docker exec -it queue sh
```
<br/>
<h3>Inside the container, run this command:</h3>

```
npx prisma migrate dev --name init
```

<h3>Exit the container:</h3>

```
Ctrl + D
```

<br/>
<br/>

## Okay, it's working!
