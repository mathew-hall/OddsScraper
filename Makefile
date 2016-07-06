all:
	ansible-playbook site.yml
	
app/logs.txt:
	scp ubuntu@54.88.132.72:app/app/logs.txt app/logs.txt

logs.tab: app/logs.txt
	sed 's/,/|/;' < $< > $@
