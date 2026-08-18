import { GenericHtml } from "../../components/GenericHtml/GenericHtml";
import { Heading } from "../../components/Heading/Heading";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import pomodoro from '../../assets/pomodoro.png'
import { RouterLink } from "../../components/RouterLink/RouterLink";

export function AboutPomodoro() {

    return (
        <>
            <MainTemplate>
                <GenericHtml>
                    <Heading>A Técnica Pomodoro 🍅</Heading>
                    
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', fontSize: '1.6rem', lineHeight: '1.8' }}>
                        A Técnica Pomodoro é uma metodologia de produtividade criada por <strong>Francesco Cirillo</strong>, que consiste em dividir o trabalho em blocos de tempo (os famosos "Pomodoros") intercalados com pausas. O objetivo é manter o foco total por um período curto e garantir descansos para evitar o cansaço mental.
                    </p>

                    <img src={pomodoro} alt="Banner da Técnica Pomodoro" style={{ width: '100%', maxWidth: '65rem', margin: '0 auto 2.4rem auto', display: 'block', borderRadius: '0.8rem' }} />

                    <h2 style={{ fontSize: '2.4rem', margin: '3.2rem 0 1.6rem 0', color: 'var(--text-default)' }}>Como funciona o Pomodoro tradicional?</h2>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, maxWidth: '65rem', margin: '0 auto 2.4rem auto', textAlign: 'left' }}>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• 1. Defina uma tarefa</strong> que você deseja realizar.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• 2. Trabalhe nela por 25 minutos</strong> sem interrupções.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• 3. Faça uma pausa curta</strong> de 5 minutos.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• 4. A cada 4 ciclos, faça uma pausa longa</strong> (geralmente 15 a 30 minutos).
                        </li>
                    </ul>

                    <h2 style={{ fontSize: '2.4rem', margin: '4rem 0 1.6rem 0', color: 'var(--text-default)' }}>Mas no Chronos Pomodoro tem um diferencial 🚀</h2>
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', fontSize: '1.6rem', lineHeight: '1.8' }}>
                        Nosso app segue o conceito original, mas com algumas melhorias e personalizações pra deixar o processo ainda mais eficiente:
                    </p>

                    <h3 style={{ fontSize: '1.8rem', margin: '2.4rem 0 0.8rem 0', color: 'var(--text-default)', fontWeight: 'bold' }}>
                        ⚙️ Personalização do tempo
                    </h3>
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', fontSize: '1.6rem', lineHeight: '1.8' }}>
                        Você pode configurar o tempo de foco, descanso curto e descanso longo do jeito que quiser! Basta acessar a <RouterLink href="/settings">página de configurações</RouterLink> e ajustar os minutos como preferir.
                    </p>

                    <h3 style={{ fontSize: '1.8rem', margin: '2.4rem 0 0.8rem 0', color: 'var(--text-default)', fontWeight: 'bold' }}>
                        🔄 Divisão dos ciclos
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, maxWidth: '65rem', margin: '0 auto 2.4rem auto', textAlign: 'left' }}>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• Ciclos ímpares:</strong> Período de foco (trabalho).
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• Ciclos pares:</strong> Descanso curto.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            <strong>• Ciclo 8:</strong> Descanso longo especial, pra resetar o ciclo completo.
                        </li>
                    </ul>

                    <h3 style={{ fontSize: '1.8rem', margin: '2.4rem 0 0.8rem 0', color: 'var(--text-default)', fontWeight: 'bold' }}>
                        🍅 Visualização dos ciclos
                    </h3>
                    <p style={{ maxWidth: '65rem', margin: '0 auto 1.6rem auto', fontSize: '1.6rem', lineHeight: '1.8' }}>
                        Logo abaixo do cronômetro, você verá bolinhas coloridas representando os ciclos:
                    </p>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, maxWidth: '65rem', margin: '0 auto 1.6rem auto', textAlign: 'left' }}>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6', display: 'flex', alignItems: 'center' }}>
                            • <span style={{ display: 'inline-block', width: '1.2rem', height: '1.2rem', backgroundColor: 'var(--warning)', borderRadius: '50%', margin: '0 0.8rem' }}></span> <span><strong>Amarelo:</strong> Ciclo de trabalho (foco).</span>
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6', display: 'flex', alignItems: 'center' }}>
                            • <span style={{ display: 'inline-block', width: '1.2rem', height: '1.2rem', backgroundColor: 'var(--primary)', borderRadius: '50%', margin: '0 0.8rem' }}></span> <span><strong>Verde:</strong> Descanso curto.</span>
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6', display: 'flex', alignItems: 'center' }}>
                            • <span style={{ display: 'inline-block', width: '1.2rem', height: '1.2rem', backgroundColor: 'var(--info)', borderRadius: '50%', margin: '0 0.8rem' }}></span> <span><strong>Azul:</strong> Descanso longo (aparece a cada 8 ciclos).</span>
                        </li>
                    </ul>
                    <p style={{ maxWidth: '65rem', margin: '1.6rem auto 2.4rem auto', fontSize: '1.6rem', lineHeight: '1.8' }}>
                        Assim, você sempre sabe em que parte do processo está e o que vem a seguir. Não precisa mais anotar no papel ou ficar calculando de cabeça!
                    </p>

                    <h3 style={{ fontSize: '1.8rem', margin: '2.4rem 0 0.8rem 0', color: 'var(--text-default)', fontWeight: 'bold' }}>
                        📊 Histórico automático
                    </h3>
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', fontSize: '1.6rem', lineHeight: '1.8' }}>
                        Todas as suas tarefas e ciclos concluídos ficam salvos no <RouterLink href="/history">histórico</RouterLink>, com status de completas ou interrompidas. Assim, você consegue acompanhar sua evolução ao longo do tempo.
                    </p>

                    <h2 style={{ fontSize: '2.4rem', margin: '4rem 0 1.6rem 0', color: 'var(--text-default)' }}>Por que usar o Chronos Pomodoro?</h2>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, maxWidth: '65rem', margin: '0 auto 2.4rem auto', textAlign: 'left' }}>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            • <strong>✅ Organize</strong> seu foco com clareza.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            • <strong>✅ Trabalhe</strong> e descanse na medida certa.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            • <strong>✅ Personalize</strong> seus próprios ciclos e tempos.
                        </li>
                        <li style={{ marginBottom: '1.2rem', fontSize: '1.6rem', lineHeight: '1.6' }}>
                            • <strong>✅ Acompanhe</strong> seu histórico automaticamente.
                        </li>
                    </ul>

                    <p style={{ maxWidth: '65rem', margin: '3.2rem auto 1.6rem auto', fontSize: '1.6rem', lineHeight: '1.8', fontWeight: 'bold' }}>
                        Pronto pra focar? Bora lá <RouterLink href="/home">voltar para a página inicial</RouterLink> e iniciar seus Pomodoros! 🍅🚀
                    </p>

                    <p style={{ maxWidth: '65rem', margin: '2.4rem auto 2.4rem auto', fontSize: '1.6rem', lineHeight: '1.8', fontStyle: 'italic', opacity: 0.8 }}>
                        "Foco total, sem pressa, sem pausa, só vai!" 💪🧘
                    </p>
                </GenericHtml>
            </MainTemplate>
        </>
    )
}


