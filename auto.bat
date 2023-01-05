echo building...
call yarn build
call git add .
@echo off
set /p msg=commit message:
@echo on
call git commit -m "%msg%" & git pull origin master & git push origin master