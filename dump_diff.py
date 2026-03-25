import subprocess
with open('diff.txt', 'wb') as f:
    f.write(subprocess.check_output(['git', 'diff']))
