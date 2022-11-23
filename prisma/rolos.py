import pandas as pd

xls = pd.read_excel("./itl50.xlsx", keep_default_na=False)

res = dict()

for i, r in xls.T.items():
    if type(r[1]) == float:
        bitola = r[1]
        continue

    if r[2] == "Entre Rolos":
        res[bitola] = list()

        x = 0
        for n in r:
            x += 1
            if x == 22:
                res[bitola].append(0)
            if type(n) in [float, int] or n == "espess.":
                res[bitola].append(-1 if n == "espess." else n)


print(res)
