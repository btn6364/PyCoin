# PyCoin

Build a cryptocurrency api from scratch using blockchain technology. 

The API support the following operations of a crytocurrency:
1. Conduct a Transaction to a known address. 
2. Mine a block with from the Transaction Pool. 
3. See the full list of the blockchain. 
4. See the wallet information. 

### Activate the virual environment

```
source venv/bin/activate
```

### Install all packages

```
pip3 install -r requirements.txt
```

### Run the tests

Make sure to activate the virtual environment
```
python3 -m pytest backend/tests
```

### Run the application and API

Make sure to activate the virtual environment
```
python3 -m backend.app
```

### Run a peer instance

Make sure to activate the virtual environment
```
export PEER=True && python3 -m backend.app
```

### Run the frontend

Redirect to the front end directory, then fire up the react application
```
cd frontend
npm run start
```

### Seed the backend with data

Make sure to activate the virtual environment
```
export SEED_DATA=True && python3 -m backend.app
```

## Authors

* **Bao Nguyen** - https://github.com/btn6364


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
