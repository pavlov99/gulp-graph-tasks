test:
	$(CURDIR)/node_modules/.bin/mocha --reporter spec

upload:
	@npm publish || echo "Published"
