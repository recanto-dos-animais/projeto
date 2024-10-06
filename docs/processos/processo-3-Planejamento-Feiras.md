### 3.3.3 Processo 3 – Planejamento e Execução de Feiras de Castração

Nome do Processo: **Planejamento e Execução de Feiras de Castração**

**Oportunidades de Melhoria:**
1. **Automatizar a gestão de eventos**: Melhorar o sistema de agendamento e notificações, integrando-o com plataformas de comunicação.
2. **Aprimorar o controle de vagas**: Implementar um sistema mais robusto para inscrições online, permitindo atualizações em tempo real e controle preciso de vagas.
3. **Otimização do atendimento**: Investir em uma tecnologia mais avançada para o sistema de fila digital, integrando-o com dispositivos móveis para facilitar o acesso dos participantes.
4. **Parcerias estratégicas**: Expandir as parcerias com empresas locais para aumentar a doação de produtos e serviços durante as feiras.
5. **Divulgação mais eficaz**: Usar ferramentas que permitam uma divulgação simultânea e otimizada em diferentes canais de comunicação.

#### Modelo do Processo 3 em BPMN
O modelo descreve o fluxo completo, desde o planejamento até a execução da feira de castração, incluindo atividades-chave como agendamento, inscrições online, gestão de filas, atendimento durante o evento, e arrecadação de doações.

#### Detalhamento das Atividades

**Nome da atividade 1: Planejamento do Evento**

| **Campo**       | **Tipo**         | **Restrições**           | **Valor default** |
| ---             | ---              | ---                      | ---               |
| Data do Evento  | Data             | Formato dd-mm-aaaa       |                   |
| Local do Evento | Caixa de Texto   | Obrigatório              |                   |
| Responsável     | Caixa de Texto   | Obrigatório              |                   |
| Notificações    | Seleção múltipla | Voluntários, Participantes |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Confirmar Planejamento| Divulgação do Evento          | default         |

**Nome da atividade 2: Divulgação do Evento**

| **Campo**       | **Tipo**         | **Restrições**           | **Valor default** |
| ---             | ---              | ---                      | ---               |
| Canais de Divulgação | Seleção múltipla | Redes sociais, E-mail, Cartazes físicos |      |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Iniciar Divulgação   | Inscrições Online              | default         |

**Nome da atividade 3: Inscrições Online**

| **Campo**       | **Tipo**         | **Restrições**           | **Valor default** |
| ---             | ---              | ---                      | ---               |
| Nome do Participante | Caixa de Texto | Obrigatório              |                   |
| Contato do Participante | Caixa de Texto | Obrigatório          |                   |
| Data e Hora da Inscrição | Data e Hora | Formato dd-mm-aaaa, hh:mm |             |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Confirmar Inscrição  | Sistema de Fila Digital        | default         |

**Nome da atividade 4: Organização da Fila Digital**

| **Campo**       | **Tipo**         | **Restrições**           | **Valor default** |
| ---             | ---              | ---                      | ---               |
| Horário do Procedimento | Data e Hora | Formato hh:mm:ss         |                   |
| Número da Fila  | Número           | Obrigatório              |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Confirmar Horário    | Atendimento                    | default         |

**Nome da atividade 5: Atendimento no Evento**

| **Campo**       | **Tipo**         | **Restrições**           | **Valor default** |
| ---             | ---              | ---                      | ---               |
| Nome do Veterinário | Caixa de Texto | Obrigatório              |                   |
| Horário de Atendimento | Data e Hora | Formato hh:mm:ss         |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Finalizar Atendimento | Arrecadação de Doações         | default         |

**Nome da atividade 6: Arrecadação de Doações e Parcerias**

| **Campo**       | **Tipo**         | **Restrições**           | **Valor default** |
| ---             | ---              | ---                      | ---               |
| Doação Recebida | Caixa de Texto   | Obrigatório              |                   |
| Parceiro        | Caixa de Texto   |                          |                   |

| **Comandos**         |  **Destino**                   | **Tipo**        |
| ---                  | ---                            | ---             |
| Confirmar Doações    | Fim do Processo                | default         |