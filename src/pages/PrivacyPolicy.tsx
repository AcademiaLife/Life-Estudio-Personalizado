
import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introducao", title: "1. Introdução" },
    { id: "coleta", title: "2. Coleta de Dados" },
    { id: "uso", title: "3. Uso dos Dados" },
    { id: "armazenamento", title: "4. Armazenamento" },
    { id: "compartilhamento", title: "5. Compartilhamento" },
    { id: "direitos", title: "6. Direitos do Usuário" },
    { id: "cookies", title: "7. Cookies e Tecnologias" },
    { id: "seguranca", title: "8. Segurança" },
    { id: "contato", title: "9. Contato para Privacidade" },
  ];

  return (
    <LegalPageLayout
      title="Política de Privacidade"
      lastUpdated="22 de julho de 2024"
      sections={sections}
    >
      <section id="introducao">
        <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            O <strong>Life Personal Estúdio</strong> está comprometido com a proteção da privacidade e dos dados pessoais 
            de seus clientes, visitantes e usuários de nossos serviços digitais.
          </p>
          <p>
            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
            pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei 13.709/2018) e 
            demais regulamentações aplicáveis.
          </p>
          <p>
            Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
          </p>
        </div>
      </section>

      <section id="coleta">
        <h2 className="text-2xl font-semibold mb-4">2. Coleta de Dados</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">2.1 Dados Coletados Diretamente</h3>
          <p>Coletamos as seguintes informações quando você:</p>
          
          <h4 className="font-medium text-foreground">Durante o cadastro/contratação:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome completo</li>
            <li>CPF</li>
            <li>Data de nascimento</li>
            <li>Telefone e WhatsApp</li>
            <li>E-mail</li>
            <li>Endereço completo</li>
          </ul>

          <h4 className="font-medium text-foreground">Para fins de saúde e treino:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Histórico médico relevante</li>
            <li>Medicações em uso</li>
            <li>Lesões ou limitações físicas</li>
            <li>Objetivos de treinamento</li>
            <li>Medidas corporais e composição corporal</li>
            <li>Dados de monitoramento cardíaco</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">2.2 Dados Coletados Automaticamente</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Endereço IP</li>
            <li>Informações do navegador</li>
            <li>Páginas visitadas em nosso site</li>
            <li>Tempo de permanência</li>
            <li>Dados de geolocalização (quando autorizado)</li>
            <li>Cookies e tecnologias similares</li>
          </ul>
        </div>
      </section>

      <section id="uso">
        <h2 className="text-2xl font-semibold mb-4">3. Uso dos Dados</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
          
          <h3 className="text-lg font-medium text-foreground">3.1 Prestação de Serviços</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elaboração de planos de treinamento personalizados</li>
            <li>Acompanhamento nutricional individualizado</li>
            <li>Agendamento de sessões e aulas</li>
            <li>Monitoramento de progresso e resultados</li>
            <li>Comunicação sobre serviços contratados</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">3.2 Comunicação e Marketing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envio de informações sobre novos serviços</li>
            <li>Campanhas promocionais (com seu consentimento)</li>
            <li>Pesquisas de satisfação</li>
            <li>Comunicados importantes sobre mudanças nos serviços</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">3.3 Obrigações Legais e Administrativas</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cumprimento de obrigações fiscais</li>
            <li>Atendimento a determinações judiciais</li>
            <li>Prevenção a fraudes</li>
            <li>Gestão financeira e cobrança</li>
          </ul>
        </div>
      </section>

      <section id="armazenamento">
        <h2 className="text-2xl font-semibold mb-4">4. Armazenamento</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">4.1 Localização dos Dados</h3>
          <p>
            Seus dados pessoais são armazenados em servidores localizados no Brasil, em conformidade 
            com a legislação nacional de proteção de dados.
          </p>

          <h3 className="text-lg font-medium text-foreground">4.2 Período de Retenção</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de clientes ativos:</strong> Durante a vigência do contrato</li>
            <li><strong>Dados após cancelamento:</strong> 5 anos para fins fiscais e legais</li>
            <li><strong>Dados de saúde:</strong> 20 anos conforme legislação médica</li>
            <li><strong>Dados de marketing:</strong> Até a retirada do consentimento</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">4.3 Backup e Recuperação</h3>
          <p>
            Mantemos backups regulares para garantir a integridade e disponibilidade dos dados, 
            seguindo as mesmas medidas de segurança dos dados principais.
          </p>
        </div>
      </section>

      <section id="compartilhamento">
        <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Não vendemos, alugamos ou cedemos seus dados pessoais para terceiros. 
            O compartilhamento ocorre apenas nas seguintes situações:
          </p>

          <h3 className="text-lg font-medium text-foreground">5.1 Prestadores de Serviços</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processadores de pagamento (bancos, gateways)</li>
            <li>Serviços de nuvem e hospedagem</li>
            <li>Plataformas de comunicação (e-mail, SMS, WhatsApp)</li>
            <li>Contadores e consultores jurídicos</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">5.2 Obrigações Legais</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Determinações judiciais</li>
            <li>Órgãos reguladores</li>
            <li>Autoridades fiscais</li>
            <li>Forças de segurança pública</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">5.3 Parceiros Comerciais</h3>
          <p>
            Apenas com seu consentimento expresso e para finalidades específicas relacionadas 
            à melhoria dos nossos serviços.
          </p>
        </div>
      </section>

      <section id="direitos">
        <h2 className="text-2xl font-semibold mb-4">6. Direitos do Usuário (LGPD)</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>

          <h3 className="text-lg font-medium text-foreground">6.1 Direitos Disponíveis</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
            <li><strong>Correção:</strong> Atualizar dados incompletos ou incorretos</li>
            <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados</li>
            <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
            <li><strong>Oposição:</strong> Contestar o uso de seus dados</li>
            <li><strong>Restrição:</strong> Limitar o processamento de seus dados</li>
            <li><strong>Revogação:</strong> Retirar consentimentos dados anteriormente</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">6.2 Como Exercer seus Direitos</h3>
          <p>Para exercer qualquer um desses direitos, entre em contato conosco através de:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>E-mail:</strong> academia-life@hotmail.com</li>
            <li><strong>WhatsApp:</strong> (41) 3679-0618</li>
            <li><strong>Presencialmente:</strong> Em nosso estúdio</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">6.3 Prazos de Atendimento</h3>
          <p>
            Responderemos às suas solicitações em até 15 dias úteis, podendo ser prorrogado 
            por mais 15 dias mediante justificativa.
          </p>
        </div>
      </section>

      <section id="cookies">
        <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
            Para informações detalhadas, consulte nossa{" "}
            <a href="/politica-de-cookies" className="text-accent hover:underline">
              Política de Cookies
            </a>.
          </p>

          <h3 className="text-lg font-medium text-foreground">7.1 Tipos de Cookies Utilizados</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essenciais:</strong> Necessários para funcionamento do site</li>
            <li><strong>Funcionais:</strong> Melhoram a experiência do usuário</li>
            <li><strong>Analíticos:</strong> Coletam estatísticas de uso</li>
            <li><strong>Marketing:</strong> Personalizam conteúdo e anúncios</li>
          </ul>
          
          <p>
            Você pode controlar o uso de cookies através das configurações do seu navegador.
          </p>
        </div>
      </section>

      <section id="seguranca">
        <h2 className="text-2xl font-semibold mb-4">8. Segurança</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">8.1 Medidas de Proteção</h3>
          <p>Implementamos as seguintes medidas para proteger seus dados:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controle de acesso baseado em funções</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Backups regulares e seguros</li>
            <li>Treinamento regular da equipe</li>
            <li>Auditorias periódicas de segurança</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">8.2 Incidentes de Segurança</h3>
          <p>
            Em caso de incidente que possa comprometer seus dados pessoais, notificaremos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A Autoridade Nacional de Proteção de Dados (ANPD) em até 72 horas</li>
            <li>Os titulares afetados no prazo adequado</li>
            <li>As medidas tomadas para mitigar os riscos</li>
          </ul>
        </div>
      </section>

      <section id="contato">
        <h2 className="text-2xl font-semibold mb-4">9. Contato para Privacidade</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">9.1 Encarregado de Dados (DPO)</h3>
          <p>
            Para questões relacionadas à proteção de dados pessoais, entre em contato com 
            nosso Encarregado de Proteção de Dados:
          </p>
          
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <p><strong>E-mail:</strong> academia-life@hotmail.com</p>
            <p><strong>Telefone:</strong> (41) 3679-0618</p>
            <p><strong>Endereço:</strong> R. Pedro Pasa, 1158 - Jardim Paulista, Campina Grande do Sul - PR, 83430-282</p>
          </div>

          <h3 className="text-lg font-medium text-foreground">9.2 Autoridade Supervisora</h3>
          <p>
            Você também pode entrar em contato diretamente com a Autoridade Nacional de 
            Proteção de Dados (ANPD) através do site:{" "}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" 
               className="text-accent hover:underline">
              www.gov.br/anpd
            </a>
          </p>

          <h3 className="text-lg font-medium text-foreground">9.3 Alterações nesta Política</h3>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente. As alterações serão 
            comunicadas através dos canais oficiais com antecedência mínima de 30 dias.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
