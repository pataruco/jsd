application := package-path

BASEDIR = $(PWD)

starter_code=starter-code
solution_code=solution-code
folder=labs

.PHONY : create-zip
create-zip:
	 zip -r ${application}/${application}-${starter_code}.zip ${application}/${starter_code}
	 zip -r ${application}/${application}-${solution_code}.zip ${application}/${solution_code}

.PHONY : delete-zip
delete-zip:
	rm -rf ${application}/${application}-${starter_code}.zip ${application}/${application}-${solution_code}.zip

.PHONY : zip-all
zip-all:
	@for f in $(shell ls -d */ ${BASEDIR} | cut -f1 -d'/'); do make create-zip application=$${f}; done

.PHONY : delete-all
delete-all:
	@for f in $(shell ls -d */ ${BASEDIR} | cut -f1 -d'/'); do make delete-zip application=$${f}; done

.PHONY : get-starter-download-path
get-starter-download-path:
	echo https://github.com/pataruco/jsd/raw/master/${folder}/${application}/${application}-starter-code.zip | pbcopy
	
.PHONY : get-solution-download-path
get-solution-download-path:
	echo https://github.com/pataruco/jsd/raw/master/${folder}/${application}/${application}-solution-code.zip | pbcopy

