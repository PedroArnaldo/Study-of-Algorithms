lista_produtos = ['Spray de cabelo', 'Máscara de cílios', 'Gel fixador', 'Sombra para os olhos', 'Gloss labial', 'Protetor solar', 'Pó compacto', 'Blush', 'Perfume', 'Creme para os pés', 'Base líquida', 'Shampoo', 'Hidratante facial', 'Condicionador', 'Iluminador', 'Removedor de esmalte', 'Removedor de maquiagem', 'Máscara capilar', 'Creme para as mãos', 'Corretivo', 'Esmalte', 'Delineador', 'Batom']

lista_produtos.remove('Delineador')

for item in lista_produtos:
    print("Temos %s à venda!" % item)
