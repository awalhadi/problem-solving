numberOfTestCase = int(input())

# Initialize counters
total = 0
rabbits = 0
rats = 0
frogs = 0
# - C: Coelho (rabbit in portuguese)
# - R: Rato (rat  in portuguese)
# - S: Sapo (frog in portuguese)
for eachCase in range(numberOfTestCase):
  amountOfAnimal, characterType = input().split()
  amount = int(amountOfAnimal)
  if characterType == 'C':
    rabbits += amount
  elif characterType == 'R':
    rats += amount
  elif characterType == 'S':
    frogs += amount

total = rabbits + rats + frogs
percentOfRabbit = (rabbits / total) * 100
percentOfRat = (rats / total) * 100
percentOfFrog = (frogs / total) * 100

print(f"Total: {total} cobaias")
print(f"Total de coelhos: {rabbits}")
print(f"Total de ratos: {rats}")
print(f"Total de sapos: {frogs}")
print(f"Percentual de coelhos: {percentOfRabbit:.2f} %")
print(f"Percentual de ratos: {percentOfRat:.2f} %")
print(f"Percentual de sapos: {percentOfFrog:.2f} %")