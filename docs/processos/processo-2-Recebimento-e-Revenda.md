### 3.3.2 Processo 2 – Recebimento e Revenda de Doações

_Apresente aqui o nome e as oportunidades de melhoria para o processo 2._  
Nome do Processo: **Recebimento e Revenda de Doações**

Oportunidades de Melhoria:  
1. **Melhorar a logística de coleta**: Automatizar o planejamento da montagem das barracas, otimizando o processo de montagem e organização.
2. **Automatização da triagem**: Implementar sistemas para facilitar a identificação automática de itens reutilizáveis e não reutilizáveis.
3. **Aprimorar a precificação e catalogação**: Introduzir tecnologias que utilizem IA para precificar e catalogar itens reutilizáveis de forma mais eficiente.
4. **Sustentabilidade no descarte**: Integrar práticas mais avançadas de descarte sustentável, como a criação de parcerias com recicladoras.

A seguir, o modelo do processo 2, descrito no padrão BPMN, foi analisado e detalhado.

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2, relacionadas com o modelo de processo._

**Nome da atividade 1: Montagem de Barracas para Coleta**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Data do Evento  | Data             | Formato dd-mm-aaaa    |                   |
| Local do Evento | Caixa de Texto   | Obrigatório           |                   |
| Responsável     | Caixa de Texto   | Obrigatório           |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Confirmar Montagem   | Coleta das Doações             | default         |

**Nome da atividade 2: Coleta das Doações**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Nome do Doador  | Caixa de Texto   | Obrigatório           |                   |
| Tipo de Doação  | Seleção única    | (Roupas, Alimentos, Outros) |                   |
| Data da Doação  | Data e Hora      | Formato dd-mm-aaaa, hh:mm |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Registrar Doações    | Triagem das Doações            | default         |

**Nome da atividade 3: Triagem das Doações**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Tipo de Item    | Caixa de Texto   | Obrigatório           |                   |
| Estado do Item  | Seleção única    | (Reutilizável, Não Reutilizável) |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Classificar Item     | Precificação ou Descarte        | default         |

**Nome da atividade 4: Precificação e Catalogação**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Nome do Item    | Caixa de Texto   | Obrigatório           |                   |
| Valor do Item   | Número           | Obrigatório           |                   |
| Categoria       | Seleção única    | (Roupas, Eletrodomésticos, Outros) |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Registrar Item       | Revenda                        | default         |

**Nome da atividade 5: Revenda dos Itens**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Nome do Comprador| Caixa de Texto  | Obrigatório           |                   |
| Valor Pago      | Número           | Obrigatório           |                   |
| Data da Compra  | Data e Hora      | Formato dd-mm-aaaa, hh:mm |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Finalizar Venda      | Fim do Processo                | default         |

**Nome da atividade 6: Descarte Sustentável**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Tipo de Descarte | Seleção única   | (Reciclagem, Outros)  |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Registrar Descarte   | Fim do Processo                | default         |