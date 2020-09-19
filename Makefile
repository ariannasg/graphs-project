PROJECT_NAME=graphs
APP_NAME=dashboard

.PHONY: install security

install:
	pip install -r requirements.txt

show-migrations:
	cd $(PROJECT_NAME) && python3 manage.py showmigrations

apply-migrations:
	cd $(PROJECT_NAME) && python3 manage.py migrate

run:
	cd $(PROJECT_NAME) && python3 manage.py runserver

test:
	cd $(PROJECT_NAME) && python3 manage.py test

lint:
	cd $(PROJECT_NAME) && pylint $(PROJECT_NAME) $(APP_NAME) --rcfile=../.pylintrc

security:
	safety check