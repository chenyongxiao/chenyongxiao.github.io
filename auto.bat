echo building...
call yarn build
git add .
@echo off
set /p msg=commit message:
@echo on
git commit -m "%msg%" 
git pull origin master 
git push origin master