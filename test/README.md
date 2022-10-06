# Testing

Keep your test files located near the classes they test. Testing files should have a `.spec` suffix.

## To run tests locally:
- Make sure you have `985465380175.dkr.ecr.ap-southeast-1.amazonaws.com/poplite-service:latest` image locally (pull from ecr if you dont have it)
- Run `./run-test.sh`
- Test will run with watcher watching your change in `src/` and `test/` folder

## Run the test directly:

```
docker-compose exec survey-builder-api npm run test
```
