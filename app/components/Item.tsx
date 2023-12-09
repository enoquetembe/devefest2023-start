interface ItemPros {
  name: string
  email: string
}


export function Item({name, email}: ItemPros) {
  return(

    <div className='bg-zinc-800 p-4 w-96 rounded-sm'>
       
       <div className='bg-zinc-700 p-5'>
        <header className='flex justify-between '>
          <h2>{name}</h2>

          <div className='flex gap-4'>
            <button className='text-red-500'>Excluir</button>
          </div>
        </header>

        <p className='pt-10'>{email}</p>
       </div>
     </div>
  )
}