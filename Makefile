install: 
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even: 
	node bin/brain-even.js
	
publish: 
	npm publish --dry-run

lint: 
	npx eslint .

lintfix: 
	npx eslint --fix .

progression: 
	node bin/progression.js
