i = 0.0

while i <= 2.0 + 1e-9:  # small epsilon to prevent floating-point issues
    for j in range(1, 4):
        ii = int(i) if round(i, 1) in [1.0, 2.0, 0.0] else round(i, 1)
        jj = int(i + j) if round(i + j, 1) in [1.0, 2.0, 3.0, 4.0, 5.0] else round(i + j, 1)
        print(f"I={ii} J={jj}")
    i += 0.2
    i = round(i, 1)