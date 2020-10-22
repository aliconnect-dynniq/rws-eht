@echo off
:node
cls
node index --config.http.port=9004 --config.aim.aud=3448421 --info.title="Verkeersbuis HLi" --debug=1
pause
goto:node
