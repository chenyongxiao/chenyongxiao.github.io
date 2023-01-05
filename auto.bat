echo building...
call yarn build
call git add .
@echo off
set /p msg=commit message:
@echo on
call git commit -m "%msg%" 
call git pull origin master 
call git push origin master