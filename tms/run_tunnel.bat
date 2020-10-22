@echo off
:node
cls
node index --config.http.port=9001 --config.aim.aud=3448914 --info.title="Tunnel" --debug=1
pause
goto:node
