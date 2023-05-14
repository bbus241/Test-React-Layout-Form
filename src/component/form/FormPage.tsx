import { Button, DatePicker, Form, Input, Radio, Select, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { State, addData } from '../../store/formSlice'
import { useTranslation } from "react-i18next";

const FormPage = () => {
  const [form] = useForm()
  const state = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const {t, i18n}= useTranslation();

  const onReset = () => {
    form.resetFields()
  }

  const onFinish = (values: any) => {
    dispatch(
      addData({
        ...values,
        id_card: values['id_card'].join(''),
        birthday: values['birthday'].format('YYYY-MM-DD'),
        key: state.last_key,
      })
    )
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Space direction='vertical'>
        <Space>
          <Form.Item
            label={t('Prefix')}
            name='name_prefix'
            rules={[{ required: true }]}>
            <Select
              options={[
                { value: 'mr', label: `${t('Mr.')}` },
                { value: 'mrs', label: `${t('Mrs.')}` },
                { value: 'miss', label: `${t('Miss')}` },
              ]}
            />
          </Form.Item>
          <Form.Item
            label={t('Firstname')}
            name='firstname'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label={t('Surname')}
            name='surname'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item
            label={t('Birthday')}
            name='birthday'
            rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            label={t('Nationality')}
            name='nationality'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item label={t('ID Card')}>
            <Space split='-'>
              <Form.Item name={['id_card', 0]} noStyle>
                <Input />
              </Form.Item>
              <Form.Item name={['id_card', 1]} noStyle>
                <Input />
              </Form.Item>
              <Form.Item name={['id_card', 2]} noStyle>
                <Input />
              </Form.Item>
              <Form.Item name={['id_card', 3]} noStyle>
                <Input />
              </Form.Item>
              <Form.Item name={['id_card', 4]} noStyle>
                <Input />
              </Form.Item>
            </Space>
          </Form.Item>
        </Space>
        <Space>
          <Form.Item
            label={t('Gender')}
            name='gender'
            initialValue='na'
            rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value='male'>{t('Male')}</Radio>
              <Radio value='female'>{t('Female')}</Radio>
              <Radio value='na'>{t('Prefer not to say')}</Radio>
            </Radio.Group>
          </Form.Item>
        </Space>
        <Space>
          <Form.Item
            label={t('Phone number')}
            name={['phone', 'number']}
            rules={[{ required: true }]}>
            <Input
              addonBefore={
                <Form.Item
                  name={['phone', 'country']}
                  rules={[{ required: true }]}
                  noStyle>
                  <Select
                    options={[{ value: '+66', label: 'Thailand (+66)' }]}
                  />
                </Form.Item>
              }
            />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item label={t('Passport')} name='passport'>
            <Input />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item
            label={t('Expect salary')}
            name='expect_salary'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 16 }}>
            <Space>
              <Button htmlType='button' onClick={onReset}>
                {t("Clear")}
              </Button>
              <Button htmlType='submit'>{t("Submit")}</Button>
            </Space>
          </Form.Item>
        </Space>
      </Space>
    </Form>
  )
}

export default FormPage
