orig = "34 31 39 04 33 08 80 63 62 61 76 28 46 73 74 16 24 25 77 13 03 27 26 10 23 41 42 19 21 51 22 12 20"
#adap = "44 78 79 06 18 55 68 66 65 56 49 75 57 71 48 72 11 59 40 50"

orig2 = orig.split()
print(orig2)

origInt = []

for i in orig2:
    origInt.append(int(i))

print(sorted(origInt))