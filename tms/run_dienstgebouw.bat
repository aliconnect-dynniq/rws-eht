@echo off
:node
cls
node index --config.http.port=9002 --config.aim.aud=3448537 --info.title="Dienstgebouw" --debug=1
pause
goto:node
