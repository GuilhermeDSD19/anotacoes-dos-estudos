Algoritmo "ValoresMatrizes"

Var
   mat : vetor [1..4,1..4] de inteiro
   l, c, sdp, p2l, m3c, maiortotal : inteiro
inicio
   p2l <- 1
   Para l <- 1 ate 4 faca
      Para c <- 1 ate 4 faca
      Escreva ("Digite o valor da posi��o [", l, ",", c, "]:")
      Leia (mat[l,c])
         Se (l = c) entao
            sdp <- sdp + mat[l,c]
         FimSe
            Se (mat[2,c] = mat[l,c]) entao
            p2l <- p2l * mat[2,c]
            FimSe
               Se (mat[l,3] > m3c) entao
                  m3c <- mat[l,c]
               FimSe
                  Se (mat[l,c] > maiortotal) entao
                  maiortotal <- mat[l,c]
                  FimSe
      Escreva ("")
      FimPara
   FimPara
   LimpaTela

   Para l <- 1 ate 4 faca
      Para c <- 1 ate 4 faca
         Escreva (mat[l,c])
      FimPara
      Escreval ("")
   FimPara
   Escreval ()
   Escreval ("A soma dos valores da diagonal principal � de: ", sdp)
   Escreval ("O produto entre os valores da 2� linha � de: ", p2l)
   Escreval ("O o maior n�mero na 3� linha �: ", m3c)
   Escreval ("O o maior n�mero da matriz foi: ", maiortotal)

Fimalgoritmo