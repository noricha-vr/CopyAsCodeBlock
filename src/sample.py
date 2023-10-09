import json

data = json.load(open('sample.json'))
for key, value in data.items():
    print(key, value)
