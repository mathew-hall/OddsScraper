.PHONY := grab
grab:
	chmod 777 logs.txt || true
	docker run --restart=always -v $(pwd)/logs.txt:/logs.txt -v $(pwd)/grab.js:/grab.js wernight/phantomjs /usr/local/bin/phantomjs /grab.js

