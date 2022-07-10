def addBinary(a, b):
    ans = format(int(a, 2) + int(b, 2), 'b')
    print(ans)
    return ans


addBinary('11', '1')
