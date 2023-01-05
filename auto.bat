@echo off
echo building...
call yarn build
call git add .
set /p msg=commit message:
call git commit -m "%msg%" 
call git pull origin master 
call git push origin master