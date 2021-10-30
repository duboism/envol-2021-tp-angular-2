UID := 1000
GID := 1000

list:
	@echo ""
	@echo "Useful targets:"
	@echo ""
	@echo "  rebuild          > Rebuild all images and start containers for dev only"
	@echo "  start            > Start containers"
	@echo "  restart          > Restart containers"
	@echo "  stop             > Stop and kill running containers"
	@echo "  status           > Display stack containers status"
	@echo "  logs             > Display containers logs"
	@echo "  install_client   > Install client dependancies"
	@echo "  install_server   > Install server dependancies"
	@echo "  build_client     > Generate the Angular client dist application (html, css, js)"
	@echo "  shell_client     > Shell into client container"
	@echo "  shell_server     > Shell into server container"
	@echo "  tests_client     > Starts the unit tests"
	@echo "  tests_client-wc  > Starts the unit tests and generate code coverage"
	@echo "  remove-mdata     > Remove the mission database"
	@echo ""

rebuild:
	@docker-compose up --build -d

start:
	@docker-compose up -d

restart: stop start

stop:
	@docker-compose kill
	@docker-compose rm -v --force

status:
	@docker-compose ps

logs:
	@docker-compose logs -f -t

install_client:
	@docker run --init -it --rm --user $(UID):$(GID) \
	-v $(CURDIR)/client:/project \
	-w /project node:16-slim yarn install

install_server:
	@docker run --init -it --rm --user $(UID):$(GID) \
	-v $(CURDIR)/server:/project \
	-w /project node:16-slim npm install

build_client:
	@docker-compose exec client ng build

shell_client:
	@docker-compose exec client bash

shell_server:
	@docker-compose exec server bash

tests_client:
	@docker-compose exec client npx jest

tests_client-wc:
	@docker-compose exec client npx jest --coverage --collectCoverageFrom='src/**/*.ts'

remove-mdata:
	@docker volume rm envol-2021-tp-angular-2_mariadata