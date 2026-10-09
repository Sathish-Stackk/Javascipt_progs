attempts = [
    ("sathish", True),
    ("admin", False),
    ("sathish", False),
    ("guest", False),
    ("sathish", True)
]

failed = {}

for username, success in attempts:
    if not success:
        failed[username] = failed.get(username, 0) + 1

print("Suspicious Accounts:")

for username, count in failed.items():
    if count >= 2:
        print(f"{username} → {count} failed attempts")
