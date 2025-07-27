import LegalPageLayout from "@/components/LegalPageLayout";
const TermsOfService = () => {
  const sections = [{
    id: "definicoes",
    title: "1. Definições e Escopo"
  }, {
    id: "responsabilidades",
    title: "2. Responsabilidades"
  }, {
    id: "pagamentos",
    title: "3. Pagamentos e Planos"
  }, {
    id: "cancelamentos",
    title: "4. Cancelamentos e Rescisão"
  }, {
    id: "alteracoes",
    title: "5. Alterações nos Termos"
  }, {
    id: "limitacoes",
    title: "6. Limitações de Responsabilidade"
  }, {
    id: "propriedade",
    title: "7. Propriedade Intelectual"
  }, {
    id: "foro",
    title: "8. Foro e Legislação"
  }];
  return <LegalPageLayout title="Termos de Serviço" lastUpdated="22 de julho de 2024" sections={sections}>
      <section id="definicoes">
        <h2 className="text-2xl font-semibold mb-4">1. Definições e Escopo</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Estes Termos de Serviço ("Termos") regulam a prestação de serviços de treinamento físico personalizado, 
            consultoria nutricional, aulas coletivas e demais atividades oferecidas pelo <strong>Life Personal Estúdio</strong>, 
            localizado na Rua Augusta, 1500 - Consolação, São Paulo - SP.
          </p>
          <p>
            Os serviços incluem, mas não se limitam a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Treinamento personalizado individual e em pequenos grupos</li>
            <li>Consultoria e acompanhamento nutricional funcional</li>
            <li>Aulas coletivas exclusivas (Pilates, alongamento, etc.)</li>
            <li>Monitoramento cardíaco durante treinos</li>
            <li>Acompanhamento via aplicativo exclusivo</li>
            <li>Consultoria para estilo de vida saudável</li>
          </ul>
        </div>
      </section>

      <section id="responsabilidades">
        <h2 className="text-2xl font-semibold mb-4">2. Responsabilidades</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">2.1 Responsabilidades do Cliente</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comparecer pontualmente aos horários agendados</li>
            <li>Informar sobre condições de saúde, lesões ou limitações físicas</li>
            <li>Seguir as orientações dos profissionais</li>
            <li>Respeitar as normas de convivência do estúdio</li>
            <li>Efetuar pagamentos nas datas acordadas</li>
            <li>Comunicar cancelamentos com antecedência mínima de 12 horas</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">2.2 Responsabilidades do Life Personal Estúdio</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer profissionais qualificados e certificados</li>
            <li>Manter equipamentos em condições adequadas de uso</li>
            <li>Garantir ambiente seguro e higienizado</li>
            <li>Respeitar os horários agendados</li>
            <li>Manter confidencialidade das informações pessoais</li>
            <li>Oferecer suporte técnico para o aplicativo exclusivo</li>
          </ul>
        </div>
      </section>

      <section id="pagamentos">
        <h2 className="text-2xl font-semibold mb-4">3. Pagamentos e Planos</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">3.1 Planos Disponíveis</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Meta Personal:</strong> R$ 399,00/mês</li>
            <li><strong>Meta Slim:</strong> R$ 449,00/mês</li>
            <li><strong>Meta Full:</strong> R$ 599,00/mês</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">3.2 Condições de Pagamento</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mensalidades com vencimento todo dia 10 do mês</li>
            <li>Primeira mensalidade paga no ato da contratação</li>
            
            <li>
          </li>
            <li>
          </li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">3.3 Formas de Pagamento</h3>
          <p>Aceitamos pagamentos via PIX, cartão de crédito, débito automático e transferência bancária, pagamento por recorrência.</p>
        </div>
      </section>

      <section id="cancelamentos">
        <h2 className="text-2xl font-semibold mb-4">4. Cancelamentos e Rescisão</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-lg font-medium text-foreground">4.1 Cancelamento pelo Cliente</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comunicação por escrito com 30 dias de antecedência</li>
            <li>Pagamento das mensalidades vencidas até a data do cancelamento</li>
            <li>Não há devolução de valores pagos antecipadamente</li>
            <li>Direito de arrependimento de 7 dias conforme CDC</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground">4.2 Rescisão pelo Life Personal Estúdio</h3>
          <p>
            Reservamo-nos o direito de rescindir o contrato em casos de:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inadimplência superior a 30 dias</li>
            <li>Comportamento inadequado ou agressivo</li>
            <li>Descumprimento reiterado das normas</li>
            <li>Fornecimento de informações falsas sobre saúde</li>
          </ul>
        </div>
      </section>

      <section id="alteracoes">
        <h2 className="text-2xl font-semibold mb-4">5. Alterações nos Termos</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            O Life Personal Estúdio reserva-se o direito de alterar estes Termos de Serviço a qualquer momento. 
            As alterações serão comunicadas com 30 dias de antecedência através de:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>E-mail cadastrado</li>
            <li>WhatsApp</li>
            <li>Comunicado no estúdio</li>
            <li>Publicação no site oficial</li>
          </ul>
          <p>
            A continuidade na utilização dos serviços após a comunicação das alterações 
            constitui aceitação dos novos termos.
          </p>
        </div>
      </section>

      <section id="limitacoes">
        <h2 className="text-2xl font-semibold mb-4">6. Limitações de Responsabilidade</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            O Life Personal Estúdio não se responsabiliza por:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lesões decorrentes do não cumprimento das orientações profissionais</li>
            <li>Problemas de saúde não informados previamente</li>
            <li>Objetos pessoais perdidos, furtados ou danificados</li>
            <li>Interrupções dos serviços por motivos de força maior</li>
            <li>Resultados não alcançados por falta de assiduidade do cliente</li>
          </ul>
          <p>
            <strong>Importante:</strong> Recomendamos consulta médica antes do início das atividades físicas.
          </p>
        </div>
      </section>

      <section id="propriedade">
        <h2 className="text-2xl font-semibold mb-4">7. Propriedade Intelectual</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Todos os materiais, métodos de treinamento, aplicativos, conteúdos digitais e demais 
            propriedades intelectuais desenvolvidas ou utilizadas pelo Life Personal Estúdio são 
            de sua exclusiva propriedade.
          </p>
          <p>
            É vedado ao cliente:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reproduzir, distribuir ou comercializar métodos ou materiais</li>
            <li>Fazer engenharia reversa dos aplicativos</li>
            <li>Utilizar a marca para fins comerciais próprios</li>
            <li>Divulgar informações confidenciais sobre metodologias</li>
          </ul>
        </div>
      </section>

      <section id="foro">
        <h2 className="text-2xl font-semibold mb-4">8. Foro e Legislação</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Estes Termos de Serviço são regidos pela legislação brasileira, especialmente:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Código de Defesa do Consumidor (Lei 8.078/90)</li>
            <li>Marco Civil da Internet (Lei 12.965/14)</li>
            <li>Lei Geral de Proteção de Dados (Lei 13.709/18)</li>
          </ul>
          <p>
            Fica eleito o foro da Comarca de São Paulo - SP para dirimir quaisquer controvérsias 
            decorrentes da prestação dos serviços, renunciando as partes a qualquer outro, 
            por mais privilegiado que seja.
          </p>
          <p className="mt-6 pt-4 border-t border-border font-medium">
            Para dúvidas ou esclarecimentos sobre estes Termos de Serviço, entre em contato conosco:
            <br />
            <strong>E-mail:</strong> contato@lifepersonalestudio.com.br
            <br />
            <strong>WhatsApp:</strong> (11) 99999-9999
          </p>
        </div>
      </section>
    </LegalPageLayout>;
};
export default TermsOfService;