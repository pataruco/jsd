application := package-path

starter_code=starter-code
solution_code=solution-code

.PHONY : create-zip
create-zip:
	 zip -r ${application}/${application}-${starter_code}.zip ${application}/${starter_code}
	 zip -r ${application}/${application}-${solution_code}.zip ${application}/${solution_code}

.PHONY : delete-zip
delete-zip:
	rm -rf ${application}/${application}-${starter_code}.zip ${application}/${application}-${solution_code}.zip
