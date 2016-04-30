/*
 Longest common subsequence
 find the longest common subsequence between sequences // usually 2

     */
    var length = []

    const lcs = (stringA, stringB) => {
        if (stringA.length == 0 || stringB.length == 0) {
            return 0
        }

        for (var x = 0; x < stringA.length + 1; x++) {
            var holder = []
            for (var y = 0; y < stringB.length + 1; y++) {
                holder[y] = 0
            }
            length[x]=holder
        }

        for (var x = 0; x < stringA.length; x++) {
            for (var y = 0; y < stringB.length; y++) {
                if (stringA[x] == stringB[y]) {
                    length[x + 1][y + 1] = length[x][y] + 1
                }
                else {
                    length[x + 1][y + 1] = Math.max(length[x + 1][y], length[x][y + 1])

                }

            }
        }
        return length

    }

/*
 Finding common substring

 */