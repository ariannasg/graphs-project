PROJECT_NAME=graphs
APP_NAME=dashboard

.PHONY: install
install:
	pip install -r requirements.txt

.PHONY: show-migrations
show-migrations:
	cd $(PROJECT_NAME) && python3 manage.py showmigrations

.PHONY: apply-migrations
apply-migrations:
	cd $(PROJECT_NAME) && python3 manage.py migrate

.PHONY: run
run:
	cd $(PROJECT_NAME) && python3 manage.py runserver

.PHONY: test
test:
	cd $(PROJECT_NAME) && python3 manage.py test

.PHONY: lint
lint:
	cd $(PROJECT_NAME) && pylint $(PROJECT_NAME) $(APP_NAME) --rcfile=../.pylintrc

.PHONY: security
security:
	safety check