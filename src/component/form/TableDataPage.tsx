import { Button, Space, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { State,removeData } from '../../store/formSlice'
import { useTranslation } from "react-i18next";

const TableDataPage = () => {
  const data = useSelector((state: State) => state.data)
  const dispatch = useDispatch()
  const {t, i18n}= useTranslation();

  return (
    <>
      <Table
        pagination={{ pageSize: 10 }}
        columns={[
          {
            title: `${t('Name')}`,
            dataIndex: 'name',
            sorter: { compare: (a, b) => a.name.localeCompare(b.name) },
          },
          {
            title: `${t('Gender')}`,
            dataIndex: 'gender',
            sorter: { compare: (a, b) => a.gender.localeCompare(b.gender) },
          },
          {
            title: `${t('Phone Number')}`,
            dataIndex: 'phone',
            sorter: { compare: (a, b) => a.phone.localeCompare(b.phone) },
          },
          {
            title: `${t('Nationality')}`,
            dataIndex: 'nationality',
            sorter: {
              compare: (a, b) => a.nationality.localeCompare(b.nationality),
            },
          },
          { title: `${t('Manage')}`, dataIndex: 'manage' },
        ]}
        dataSource={data.map((val) => {
          return {
            key: val.key,
            name: `${val.firstname} ${val.surname}`,
            gender: { na: 'N/A', male: 'Male', female: 'Female' }[val.gender],
            phone:
              val.phone?.country && val.phone.number
                ? `${val.phone?.country} ${val.phone?.number}`
                : '',
            nationality: `${val.nationality}`,
            manage: (
              <Space>
                <Button
                  type='link'
                  onClick={() => {
                    dispatch(removeData(val.key))
                  }}>
                  {t('Delete')}
                </Button>
              </Space>
            ),
          }
        })}
      />
    </>
  )
}

export default TableDataPage
