application := package-path

BASEDIR = $(PWD)

starter_code=starter-code
solution_code=solution-code

# declare -a applications

applications=($(ls -d */ | cut -f1 -d'/'))

.PHONY : create-zip
create-zip:
	 zip -r ${application}/${application}-${starter_code}.zip ${application}/${starter_code}
	 zip -r ${application}/${application}-${solution_code}.zip ${application}/${solution_code}

.PHONY : delete-zip
delete-zip:
	rm -rf ${application}/${application}-${starter_code}.zip ${application}/${application}-${solution_code}.zip

.PHONY : zip-all
zip-all:
	@for f in $(shell ls ${BASEDIR}); do echo $${f}; done
