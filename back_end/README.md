### Installation
Set up & run a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate    # Activation
deactivate                  # Deactivation
```
To install the dependencies:
```bash
pip install -r requirements.txt
```

To start server:
```bash
uvicorn main:app --reload
```
