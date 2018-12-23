SHELL = /bin/sh
start:
		npx styleguidist server
build:
		rm -rf dist
		npx tsc
copy:
		cp -r ./src/common ./dist/		
		cp -r ./src/icons ./dist/
docs:
		npx styleguidist build		