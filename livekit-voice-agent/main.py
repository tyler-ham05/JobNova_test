import subprocess
import time

print("Starting servers...")

# Launch agent.py
process1 = subprocess.Popen(['python', 'agent.py', 'dev'])
# Launch token_server.py
process2 = subprocess.Popen(['python', 'token_server.py'])
print("Exiting.")