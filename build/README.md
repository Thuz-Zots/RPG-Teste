# A Guilda — D&D 5e Revisado 2024 · v0.4

Aplicação web de mesa com interface dark-fantasy preservada, contas, campanhas, personagens, núcleo inicial de regras D&D 2024 e mapa tático.

## Executar localmente

- Node.js 20+
- `npm install`
- `npm start`
- Acesse `http://localhost:3000`

Sem `DATABASE_URL`, o servidor usa `data/local-dev.json` apenas para desenvolvimento. Em produção, configure `DATABASE_URL` do Neon e `SESSION_SECRET` (mínimo 32 caracteres) no Render. O `render.yaml` define o serviço web; aplique `migrations/001_initial.sql` no Neon se a sua configuração não executar as migrações automaticamente. A aplicação também cria as tabelas essenciais na inicialização.

## Funcionalidades nesta versão

- Cadastro/login com senha protegida por scrypt e sessão HTTP.
- Perfil Mestre/Jogador e autorização por campanha.
- Personagens vinculados à conta; salvamento validado no servidor.
- Catálogo de 12 classes, subclasses, espécies e antecedentes.
- Compra de pontos, melhorias de atributo do antecedente (+2/+1), perícias, talentos/ASI com marcos de classe, cálculos de proficiência, modificadores, PV, CA por armadura/escudo, iniciativa, deslocamento e traços resumidos.
- Estrutura de progressão até o nível 20, recursos iniciais e espaços de magia; regras de Pacto do Bruxo e conjuradores parciais incluídas.
- Equipamentos e armas de catálogo inicial com propriedades/maestria resumidas.
- Alterações de classe/nível/espécie/antecedente/equipamento geram confirmação e histórico de snapshot; escolhas incompatíveis ficam registradas como pendências em vez de serem descartadas.
- Mapa tático em grade, tokens, movimentação controlada pelo Mestre e névoa de guerra por célula.
- Iniciativa, ordem de turnos, rodada, PV de combatentes e rolagem de dados com parser restrito.
- Estado tático persistido junto à sessão (JSON local ou JSONB no Neon).

## Limitações importantes — não é ainda um motor D&D 2024 completo

Esta versão é uma evolução funcional, mas não deve ser anunciada como implementação integral do Livro do Jogador 2024. O catálogo de características de classe ainda tem lacunas e marcos resumidos; não contém todas as características e subcaracterísticas de cada classe/subclasse em todos os níveis. O conteúdo de talentos, antecedentes, espécies, armas e armaduras é resumido e precisa de revisão linha a linha. As listas de magias e descrições, preparação por classe, componentes, duração, concentração e interações não estão implementadas. Equipamento inicial completo, proficiências por classe/antecedente, regras de multiclasse, escolhas de estilo de luta, manobras, invocações, metamagia, formas selvagens, condições, ações, descanso e recuperação de recursos ainda precisam ser completados. O sistema de combate atual é um tracker assistido, não um resolvedor completo de combate.

A movimentação dos tokens e controle da névoa são exclusivos do Mestre nesta versão; tokens ainda não estão vinculados automaticamente a fichas de jogadores. O mapa tático é uma camada de grade sobre o quadro de mapa e não oferece iluminação dinâmica, medição avançada, paredes ou linha de visão.

A revisão de regras deve continuar baseada nos materiais D&D 2024 disponibilizados pelo usuário, respeitando direitos autorais. Não incorporar conteúdo de 2014. Ordem Paranormal permanece fora deste módulo.

## Testes

`npm test` executa os testes unitários do motor de regras. `npm run check` verifica sintaxe e executa os testes. Testes de navegador multiusuário e integração real com Neon/Render ainda precisam ser executados no ambiente de implantação.


## Versão 0.5.0 — criação guiada para iniciantes

A criação de personagem foi reorganizada em cinco etapas: básico, atributos, origem, equipamento/opções avançadas e perícias. A interface explica em linguagem simples o significado de classe, espécie, antecedente, atributos e perícias. O usuário pode voltar etapas e revisar a ficha antes de salvar.

## Auditoria das regras D&D 2024 — situação honesta

O catálogo estrutural das 12 classes, subclasses, alguns marcos de classe, cálculo de proficiência, compra de pontos, antecedentes e cálculos básicos já está presente. **Isso ainda não equivale à implementação integral e validada das 12 progressões de classe e de todas as subclasses e magias do Livro do Jogador 2024.** Algumas características de classe são resumos estruturais e não possuem ainda todos os efeitos, usos, recargas, pré-requisitos e interações. O catálogo de magias e a validação de preparação/listas por classe também precisam ser completados.

O PDF 2024 fornecido foi identificado como referência do projeto, mas a versão atual ainda não tem uma auditoria página a página de todas as tabelas e características. Portanto, não trate as progressões atuais como autoridade final para campanhas oficiais de níveis elevados. Não foi usado o livro de 2014 para preencher essas lacunas.

### Próxima etapa técnica obrigatória

1. Transcrever para dados estruturados próprios os marcos de cada classe e subclasse com referência de capítulo/página para auditoria interna.
2. Validar separadamente os 20 níveis de cada uma das 12 classes, inclusive recursos, usos, recargas, escolhas e exceções.
3. Completar listas de magias, listas por classe, truques, preparação/conhecidas, espaços e regras especiais de cada conjurador.
4. Criar testes de regressão por classe, nível e subclasse, com casos-limite.
5. Só então marcar cada progressão como validada.

O conteúdo textual de livros comerciais não é reproduzido integralmente. A implementação deve usar mecânicas e dados permitidos pela licença aplicável, resumos originais e conteúdo autorizado.
