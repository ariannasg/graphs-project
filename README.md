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
- Create and activate a virtual environment where we can install all required packages:
    ```
    python3 -m venv ./.venv
    source .venv/bin/activate
    ```
- Inside the virtual environment, install project requirements:
    ```
    (.venv) ➜ make install
    ```
- Inside the virtual environment, check the migration files that we need to apply:
    ```
    (.venv) ➜ make show-migrations
    ```
- Inside the virtual env, apply all pending migrations. 
  Then verify it was done successfully (you should see an "x" next to each migration):
    ```
    (.venv) ➜ make apply-migrations
    (.venv) ➜ make show-migrations
    ```
- Inside the virtual env (under the graphs folder), start a server to run the project:
    ```
    (.venv) ➜ make run
    ```
- Visit URL: http://127.0.0.1:8000/ to make sure the server is up.

## License
This project is licensed under the terms of the MIT License.
Please see [LICENSE](LICENSE.md) for details.
