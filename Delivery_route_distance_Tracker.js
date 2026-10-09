locations = {
    "College": 0,
    "Library": 3,
    "Cafe": 6,
    "Hostel": 9
}

route = ["College", "Library", "Cafe", "Hostel"]

distance = 0

for i in range(len(route) - 1):
    start = locations[route[i]]
    end = locations[route[i + 1]]
    distance += abs(end - start)

print("Route:", " → ".join(route))
print("Total Distance:", distance, "km")

if distance > 7:
    print("Long route detected")
else:
    print("Short route")
