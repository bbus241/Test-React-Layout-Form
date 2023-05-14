import { useEffect } from 'react'
import HeaderPage from './HeaderPage'
import FormPage from './FormPage'
import TableDataPage from './TableDataPage'
import { useDispatch } from 'react-redux'
import { loadData } from '../../store/formSlice'


const AllPageinForm = () => {
  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(loadData())
  }, [dispatcher])

  return (
    <>
      <HeaderPage />
      <br/>
      <br/>
      <FormPage />
      <br/>
      <TableDataPage />
    </>
  )
}

export default AllPageinForm
