// carrega as variáveis de ambiente do arquivo .env para a memória (process.env)
require('dotenv').config();


// importa a função fabrica 'createClient' do SDK oficial do Supabase
const { createClient } = require('@supabase/supabase-js');


// Resgata as credenciais dentro do Cofre Digital (.env)
const supabaseUrl = process.env.SUPABASE_url;
const supabaseKey = process.env.SUPABASE_KEY;


// Validação de segurança: impede que o servidor suba sem as chaves 
if (!supabaseUrl || !supabaseKey) {
    console.error('[ERRO CRITICO DE SEGURANÇA]: SUPABASE_URL ou SUPABASE_KEY não foram encontradas no arquivo .env!');
    console.error('verifique se o arquivo .env está na raiz do projeto e sem espaços ao redor do sinal de =.');
    process.exit(1); 
} 


// instancia a ponte oficial de comunicação com a nuvem do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);


console.log('[SUPABASE SDK]: Ponte de comunicação instanciada com segurança!');


// Exporta a instância do Supabase para ser reutilizada em rotas e controllers
module.exports = supabase;