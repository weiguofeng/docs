# 15、批量修改文件前缀的bat脚本







```bat
@echo off
setlocal enabledelayedexpansion

set "directory=C:\path\to\your\directory"  REM 替换为实际目录
set "prefix=new_prefix"  REM 替换为新的前缀

pushd "%directory%"

for %%F in (*) do (
    if "%%~xF" NEQ "" (
        set "new_name=%prefix%%%~nxF"
        ren "%%F" "!new_name!"
        echo Renamed '%%F' to '!new_name!'
    )
)

popd
```







