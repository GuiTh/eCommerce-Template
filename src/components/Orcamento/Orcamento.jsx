import React from 'react'


const Orcamento = () => {


  return (
    <div className='container w-50'>
        <div className="mt-5 text-center titulo">
            <h2>Solicite um <strong>Orçamento</strong></h2>
            <p>Entre em contato e conheça nossos serviços</p>
        </div>
        <div className='mt-2'>
            <label for="Nome" className='fs-5'>Nome Completo</label>
            <input type="text" placeholder='Seu nome' className='form-control' name="Nome" id="" />
        </div>
        <div className='mt-2'>
            <label htmlFor="CNPJ">CNPJ</label>
            <input type="text" placeholder='xx.xxx.xxx/xxxx-xx' className='form-control' id="cnpj" name="cnpj" />
        </div>
        <div className='mt-2'>
            <label htmlFor="Telefone">Telefone celular</label>
            <input type="text" placeholder='(xx) xxxxx-xxxx' className='form-control' id="Telefone" name="cnpj" />
        </div>
        <div className='mt-2'>
            <label htmlFor="E-mail">E-mail</label>
            <input type="text" placeholder='Exemplo@exemplo.com' className='form-control' id="E-mail" name="cnpj" />
        </div>
        <div className='mt-2'>
            <label htmlFor="Mensagem">Mensagem</label>
            <textarea name="Mensagem" className='form-control'  placeholder='Nos informe detalhes do seu pedido' id=""></textarea>
        </div>
    </div>
  )
}

export default Orcamento