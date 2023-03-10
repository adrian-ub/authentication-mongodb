Correr base de datos

```
docker run -d -p 27017:27017 --name database -v mongo-data:/data/db -e MONGODB_INITDB_ROOT_USERNAME=sample-db-user -e MONGODB_INITDB_ROOT_PASSWORD=sample-password -e MONGO_INITDB_DATABASE=authentication mongo:latest
```

Compilar imagen

```
docker build -t authentication .
```

Correr imagen

```
docker run --name authentication_api -p=8080:8080 authentication
```
