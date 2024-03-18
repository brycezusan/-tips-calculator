export const formatCurrency=(moneda:number)=>{
  return moneda.toLocaleString('es-PE',{
    style:'currency',
    currency:'PEN'
  })
}