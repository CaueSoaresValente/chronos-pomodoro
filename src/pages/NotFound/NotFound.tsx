import { GenericHtml } from "../../components/GenericHtml/GenericHtml";
import { RouterLink } from "../../components/RouterLink/RouterLink";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

export function NotFound() {

    return (
        <>
            <MainTemplate>
                <GenericHtml>
                    <h1>404 - Página não encontrada 🚀</h1>
                    
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', lineHeight: '1.8', fontSize: '1.6rem' }}>
                        Opa! Parece que a página que você está tentando acessar não existe. Talvez ela tenha tirado férias, resolvido explorar o universo ou se perdido em algum lugar entre dois buracos negros. 🌌
                    </p>
                    
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', lineHeight: '1.8', fontSize: '1.6rem' }}>
                        Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em segurança para a <RouterLink href="/home">página principal</RouterLink> ou <RouterLink href="/history">para o histórico</RouterLink> — ou pode ficar por aqui e fingir que achou uma página secreta que só os exploradores mais legais conseguem acessar. 🧭✨
                    </p>
                    
                    <p style={{ maxWidth: '65rem', margin: '0 auto 2.4rem auto', lineHeight: '1.8', fontSize: '1.6rem' }}>
                        Se você acha que essa página deveria existir (ou se quiser bater um papo sobre viagem no tempo e buracos de minhoca), é só entrar em contato. Caso contrário, use o menu para voltar ao mundo real.
                    </p>
                    
                    <p style={{ maxWidth: '65rem', margin: '3.2rem auto 2.4rem auto', lineHeight: '1.8', fontSize: '1.6rem', fontStyle: 'italic', opacity: 0.8 }}>
                        Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na internet, será que ela existiu de verdade?" 🧐💭
                    </p>
                </GenericHtml>
            </MainTemplate> 
        </>
    )
}


