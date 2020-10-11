[![CI Workflow](https://github.com/ariannasg/graphs-project/workflows/CI%20Workflow/badge.svg)](https://github.com/ariannasg/graphs-project/actions?query=workflow%3A%22CI+Workflow%22)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

# Graphs Project

* [Description](#description)
* [Project setup](#project-setup)
* [License](#license)

## Description
Experiment.

## Project setup
- Install python 3: https://www.python.org/downloads/
- Install Pycharm: https://www.jetbrains.com/pycharm/download/
- Create and activate a virtual environment where we can install all required packages:
    ```
    (Mac)
    python3 -m venv ./.venv
    source .venv/bin/activate
 
    (Windows)
    python -m venv C:\path\venv
    C:\path\venv\Scripts\activate
    ```
- Inside the virtual environment, install project requirements:
    ```
    (Mac)
    (.venv) ➜ make install
 
    (Windows)
    (venv) ➜ pip install -r requirements.txt
    ```
- Inside the virtual environment, check the migration files that we need to apply:
    ```
    (Mac)
    (.venv) ➜ make show-migrations
  
    (Windows)
    (venv) ➜ cd graphs
    (venv) ➜ python manage.py showmigrations
    ```
- Inside the virtual environment, apply all pending migrations. 
  Then verify it was done successfully (you should see an "x" next to each migration):
    ```
    (Mac)
    (.venv) ➜ make apply-migrations
    (.venv) ➜ make show-migrations
  
    (Windows)
    cd graphs
    (venv) ➜ python manage.py migrate
    (venv) ➜ python manage.py showmigrations
    ```
- Inside the virtual environment, start a server to run the project:
    ```
    (Mac)
    (.venv) ➜ make run
  
    (Windows)
    (venv) ➜ cd graphs
    (venv) ➜ python manage.py runserver
    ```
- Visit URL: http://127.0.0.1:8000/ to make sure the server is up.
- Use the app.

## License
This project is licensed under the terms of the MIT License.
Please see [LICENSE](LICENSE.md) for details.
