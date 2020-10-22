@echo off
:node
cls
node index --config.http.port=9005 --config.aim.aud=3443779 --info.title="Verkeersbuis HRe" --debug=1
pause
goto:node
