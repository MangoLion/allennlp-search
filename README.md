# Coreference Search Framework, Implemented on top of AllenNLP Demo Project

## Installation:
1. Create a fresh environment:

    ```bash
    conda create -n allennlp-demo python=3.7
    conda activate allennlp-demo
    ```
2. Clone this project and run ``pip install -r requirements.txt``

2.  Install the version of AllenNLP you would like to use.

    a.  To install the latest release, run `pip install allennlp`.

    b.  If you would like to use the same version this commit was tested on, please look in the
        Dockerfile and install that commit.

        git+git://github.com/allenai/allennlp.git@$SOURCE_COMMIT

    c.  To install AllenNLP from source you can use `pip install --editable .`

2. Build the frontend

    ```bash
    ./scripts/build_demo.py
    ```
3. Replace the files inside the demo/build folder with the files inside the build_replace folder

4. Start the server with 
```bash
./app.py --model coreference-resolution
```
