
import LegalPageLayout from "@/components/LegalPageLayout";

const CookiePolicy = () => {
  const sections = [
    { id: "introducao", title: "1. O que são Cookies" },
    { id: "tipos", title: "2. Tipos de Cookies" },
    { id: "utilizados", title: "3. Cookies que Utilizamos" },
    { id: "controle", title: "4. Controle pelo Usuário" },
    { id: "terceiros", title: "5. Cookies de Terceiros" },
    { id: "atualizacao", title: "6. Atualizações" },
  ];

  return (
    <LegalPageLayout
      title="Política de Cookies"
      lastUpdated="22 de julho de 2024"
      sections={sections}
    >
      <section id="introducao">
        <h2 className="text-2xl font-semibold mb-4">1. O que são Cookies</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, 
            tablet ou smartphone) quando você visita nosso site. Eles contêm informações sobre sua 
            navegação e preferências, permitindo que o site reconheça seu dispositivo em visitas futuras.
          </p>
          <p>
            Os cookies são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, 
            bem como para fornecer informações aos proprietários do site sobre como os usuários interagem 
            com suas páginas.
          </p>
          <p>
            O <strong>Life Personal Estúdio</strong> utiliza cookies para melhorar sua experiência de navegação, 
            personalizar conteúdo e anúncios, fornecer recursos de redes sociais e analisar nosso tráfego.
          </p>
        </div>
      </section>

      <section id="tipos">
        <h2 className="text-2xl font-semibold mb-4">2. Tipos de Cookies</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">2.1 Classificação por Necessidade</h3>
          
          <h4 className="font-medium text-foreground">Cookies Essenciais (Obrigatórios)</h4>
          <p>
            São necessários para que o site funcione corretamente. Eles permitem navegação básica e 
            acesso a áreas seguras. Sem esses cookies, alguns serviços solicitados não podem ser fornecidos.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Manutenção de sessão de usuário</li>
            <li>Segurança e prevenção a fraudes</li>
            <li>Funcionalidades básicas do site</li>
          </ul>

          <h4 className="font-medium text-foreground">Cookies Funcionais (Opcionais)</h4>
          <p>
            Melhoram a funcionalidade do site e personalizam sua experiência, lembrando suas escolhas 
            e preferências.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Idioma preferido</li>
            <li>Configurações de acessibilidade</li>
            <li>Preferências de localização</li>
          </ul>

          <h4 className="font-medium text-foreground">Cookies Analíticos (Opcionais)</h4>
          <p>
            Coletam informações sobre como você usa nosso site, permitindo-nos melhorar seu desempenho 
            e conteúdo.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Páginas mais visitadas</li>
            <li>Tempo de permanência</li>
            <li>Origem do tráfego</li>
          </ul>

          <h4 className="font-medium text-foreground">Cookies de Marketing (Opcionais)</h4>
          <p>
            Utilizados para personalizar anúncios e medir a eficácia de campanhas publicitárias.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Interesses demonstrados</li>
            <li>Histórico de navegação relevante</li>
            <li>Segmentação de público</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">2.2 Classificação por Duração</h3>
          
          <h4 className="font-medium text-foreground">Cookies de Sessão</h4>
          <p>
            Temporários, são excluídos quando você fecha o navegador. Usados para funcionalidades 
            básicas durante sua visita.
          </p>

          <h4 className="font-medium text-foreground">Cookies Persistentes</h4>
          <p>
            Permanecem no seu dispositivo por um período determinado ou até serem excluídos manualmente. 
            Usados para lembrar suas preferências entre visitas.
          </p>
        </div>
      </section>

      <section id="utilizados">
        <h2 className="text-2xl font-semibold mb-4">3. Cookies que Utilizamos</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">3.1 Cookies Próprios</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-3 text-left font-medium text-foreground">Nome</th>
                  <th className="border border-border p-3 text-left font-medium text-foreground">Tipo</th>
                  <th className="border border-border p-3 text-left font-medium text-foreground">Finalidade</th>
                  <th className="border border-border p-3 text-left font-medium text-foreground">Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">session_id</td>
                  <td className="border border-border p-3">Essencial</td>
                  <td className="border border-border p-3">Manter sessão do usuário</td>
                  <td className="border border-border p-3">Sessão</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">csrf_token</td>
                  <td className="border border-border p-3">Essencial</td>
                  <td className="border border-border p-3">Segurança contra CSRF</td>
                  <td className="border border-border p-3">Sessão</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">user_preferences</td>
                  <td className="border border-border p-3">Funcional</td>
                  <td className="border border-border p-3">Lembrar configurações</td>
                  <td className="border border-border p-3">1 ano</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">cookie_consent</td>
                  <td className="border border-border p-3">Essencial</td>
                  <td className="border border-border p-3">Armazenar preferências de cookies</td>
                  <td className="border border-border p-3">1 ano</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium text-foreground">3.2 Cookies de Terceiros</h3>
          <p>
            Também utilizamos cookies de parceiros confiáveis para nos ajudar a melhorar nossos serviços:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-3 text-left font-medium text-foreground">Serviço</th>
                  <th className="border border-border p-3 text-left font-medium text-foreground">Tipo</th>
                  <th className="border border-border p-3 text-left font-medium text-foreground">Finalidade</th>
                  <th className="border border-border p-3 text-left font-medium text-foreground">Política</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Google Analytics</td>
                  <td className="border border-border p-3">Analítico</td>
                  <td className="border border-border p-3">Análise de tráfego e comportamento</td>
                  <td className="border border-border p-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-accent hover:underline">Ver política</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Facebook Pixel</td>
                  <td className="border border-border p-3">Marketing</td>
                  <td className="border border-border p-3">Campanhas publicitárias direcionadas</td>
                  <td className="border border-border p-3">
                    <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" 
                       className="text-accent hover:underline">Ver política</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Google Maps</td>
                  <td className="border border-border p-3">Funcional</td>
                  <td className="border border-border p-3">Exibição de mapas e localização</td>
                  <td className="border border-border p-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-accent hover:underline">Ver política</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="controle">
        <h2 className="text-2xl font-semibold mb-4">4. Controle pelo Usuário</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">4.1 Gerenciamento de Cookies</h3>
          <p>
            Você tem controle total sobre os cookies em seu dispositivo. Pode aceitar, recusar ou 
            excluir cookies através das configurações do seu navegador.
          </p>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="font-medium text-foreground mb-2">⚠️ Importante:</p>
            <p>
              Desabilitar cookies essenciais pode afetar o funcionamento correto do nosso site e 
              impedir o acesso a certas funcionalidades.
            </p>
          </div>

          <h3 className="text-lg font-medium text-foreground">4.2 Configurações por Navegador</h3>
          
          <h4 className="font-medium text-foreground">Google Chrome</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Clique no menu (três pontos) → Configurações</li>
            <li>Vá para "Privacidade e segurança" → "Cookies e outros dados do site"</li>
            <li>Escolha suas preferências de cookies</li>
          </ol>

          <h4 className="font-medium text-foreground">Mozilla Firefox</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Clique no menu → Configurações</li>
            <li>Vá para "Privacidade e Segurança"</li>
            <li>Configure as opções em "Cookies e dados do site"</li>
          </ol>

          <h4 className="font-medium text-foreground">Safari</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Safari → Preferências</li>
            <li>Clique na aba "Privacidade"</li>
            <li>Configure o bloqueio de cookies</li>
          </ol>

          <h4 className="font-medium text-foreground">Microsoft Edge</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Clique no menu (três pontos) → Configurações</li>
            <li>Vá para "Privacidade, pesquisa e serviços"</li>
            <li>Configure as opções de cookies</li>
          </ol>

          <h3 className="text-lg font-medium text-foreground">4.3 Ferramentas de Opt-out</h3>
          <p>Para cookies específicos de publicidade, você pode usar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Ads:</strong>{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" 
                 className="text-accent hover:underline">
                adssettings.google.com
              </a>
            </li>
            <li>
              <strong>Facebook:</strong>{" "}
              <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer" 
                 className="text-accent hover:underline">
                Configurações de anúncios
              </a>
            </li>
            <li>
              <strong>Your Online Choices:</strong>{" "}
              <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-accent hover:underline">
                youronlinechoices.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="terceiros">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies de Terceiros</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Utilizamos serviços de terceiros confiáveis que podem definir cookies em nosso site. 
            Estes parceiros têm suas próprias políticas de privacidade e cookies.
          </p>

          <h3 className="text-lg font-medium text-foreground">5.1 Google Analytics</h3>
          <p>
            Usado para análise de tráfego e comportamento dos usuários. Os dados coletados nos ajudam 
            a melhorar nosso site e serviços.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Páginas mais visitadas</li>
            <li>Tempo de permanência no site</li>
            <li>Dispositivos utilizados</li>
            <li>Localização geográfica (aproximada)</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">5.2 Redes Sociais</h3>
          <p>
            Botões de compartilhamento e widgets de redes sociais podem definir cookies para:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Facilitar o compartilhamento de conteúdo</li>
            <li>Personalizar conteúdo social</li>
            <li>Medir eficácia de campanhas</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">5.3 Processadores de Pagamento</h3>
          <p>
            Para processar pagamentos com segurança, utilizamos cookies de:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Verificação de identidade</li>
            <li>Prevenção a fraudes</li>
            <li>Processamento seguro de transações</li>
          </ul>
        </div>
      </section>

      <section id="atualizacao">
        <h2 className="text-2xl font-semibold mb-4">6. Atualizações desta Política</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">6.1 Revisões Periódicas</h3>
          <p>
            Esta Política de Cookies é revisada regularmente para garantir que esteja atualizada 
            com nossas práticas e a legislação vigente.
          </p>

          <h3 className="text-lg font-medium text-foreground">6.2 Comunicação de Mudanças</h3>
          <p>
            Quando houver alterações significativas, notificaremos através de:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Banner informativo no site</li>
            <li>E-mail para usuários cadastrados</li>
            <li>Atualização da data nesta página</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">6.3 Dúvidas e Contato</h3>
          <p>
            Para esclarecer dúvidas sobre nossa Política de Cookies, entre em contato:
          </p>
          
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <p><strong>E-mail:</strong> privacidade@lifepersonalestudio.com.br</p>
            <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
            <p><strong>Endereço:</strong> R. Pedro Pasa, 1158 - Jardim Paulista, Campina Grande do Sul - PR, 83430-282</p>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) 
              e o Marco Civil da Internet, garantindo transparência no uso de cookies e 
              tecnologias similares.
            </p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
